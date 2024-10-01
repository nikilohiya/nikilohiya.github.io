---
layout: "splash"
title: "LangGraph: Building Resilient Language Agents as Graphs"
categories: "AI-Engineering"
---
## Introduction

LangGraph is a powerful library designed to build stateful, multi-actor applications using Large Language Models (LLMs).  It excels in creating agent and multi-agent workflows, offering key advantages over traditional LLM frameworks. 

LangGraph focuses on:

* **Cycles:** LangGraph allows you to define workflows with cycles, a critical feature for most agentic architectures, setting it apart from solutions based on directed acyclic graphs (DAGs).
* **Controllability:**  The library provides fine-grained control over both the flow and state of your application, crucial for building reliable agents.
* **Persistence:** LangGraph includes built-in persistence, enabling advanced human-in-the-loop features and memory capabilities.

Inspired by Pregel and Apache Beam, LangGraph leverages NetworkX for its public interface. While created by LangChain Inc., the creators of LangChain, LangGraph can be utilized independently. 

This blog post delves into the core concepts of LangGraph and demonstrates its practical application in creating resilient and adaptable language agents.

##  State Management in LangGraph

One of the central concepts of LangGraph is **state**.  Each execution of a LangGraph generates a state, which is passed between nodes in the graph as they execute. Each node updates this internal state using its return value.

The state update mechanism is determined by:

* The type of graph selected
* A custom function defined by the user

## A Simple Example: Agent with a Search Tool

Let's consider a simple agent that uses a search tool.  This agent maintains a conversation history, adding each message to its state.  

```python
from langchain.llms import OpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory
from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode
from langgraph.nodes import AgentNode
from langchain_core.messages import AIMessage, HumanMessage

# Initialize LLM and memory
llm = OpenAI(temperature=0)
memory = ConversationBufferMemory()

# Define an agent node
def agent_node(state, agent, name):
    result = agent.invoke(state)
    return {
        "messages": [result],  # Add the result to the state
        "sender": name,       # Track the sender
    }

# Create the agent
agent = ConversationChain(llm=llm, memory=memory)

# Define the graph
graph = StateGraph(initial_state={"messages": []})  # Start with an empty message list

# Add the agent node as the entry point
graph.add_node("agent", AgentNode(agent_node, agent=agent, name="agent"))

# Add a tool node (e.g., a search tool)
graph.add_node("search", ToolNode(search_tool)) 

# Define conditional edges
graph.add_conditional_edges(
    "agent",  
    lambda state: "tool_call" in state["messages"][-1].tool_calls,  # Check for tool calls
    {"tool_call": "search", "end": END}, 
)

# Route tool calls back to the agent
graph.add_conditional_edges("search", lambda state: state["sender"], {"agent": "agent"})

# Connect the start node to the agent
graph.add_edge(START, "agent")

# Run the graph
result = graph.run({"messages": [HumanMessage(content="What is the capital of France?")]})

# Output the final conversation state
print(result) 
```

In this example, the agent receives a message, adds it to its state, and invokes the LLM. If the LLM requires a tool call, the graph routes execution to the "search" node.  Upon completion of the tool call, the graph returns to the agent. The process continues until there are no more tool calls, at which point the graph completes and returns the final state.


## Multi-Agent Collaboration

LangGraph excels in handling multi-agent systems.  Let's consider a scenario involving two agents:

* **Generator:** Generates research questions
* **Executor:** Finds relevant information for each question

The graph structure would be:

```python
from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode
from langgraph.nodes import AgentNode
from langchain.llms import OpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

# Initialize LLMs and memory
llm_generator = OpenAI(temperature=0)
llm_executor = OpenAI(temperature=0)
memory_generator = ConversationBufferMemory()
memory_executor = ConversationBufferMemory()

# Define agent nodes
def generator_node(state, agent, name):
    result = agent.invoke(state)
    return {
        "messages": [result], 
        "sender": name,
        "research_questions": [result.content] if result.content else [],
    }

def executor_node(state, agent, name):
    result = agent.invoke(state)
    return {
        "messages": [result], 
        "sender": name,
        "results": result.content,
    }

# Create the agents
generator_agent = ConversationChain(llm=llm_generator, memory=memory_generator)
executor_agent = ConversationChain(llm=llm_executor, memory=memory_executor)

# Define the graph
graph = StateGraph(initial_state={"messages": [], "research_questions": [], "results": []})

# Add agent nodes
graph.add_node("generator", AgentNode(generator_node, agent=generator_agent, name="generator"))
graph.add_node("executor", AgentNode(executor_node, agent=executor_agent, name="executor"))

# Add a tool node for information retrieval (e.g., a search tool)
graph.add_node("search", ToolNode(search_tool))

# Define conditional edges
graph.add_conditional_edges(
    "generator",
    lambda state: len(state["research_questions"]) > 0,
    {"research_question": "executor", "end": END},
)

graph.add_conditional_edges(
    "executor",
    lambda state: state["results"] is not None,
    {"search": "search", "end": END}, 
)

# Route tool calls back to the executor
graph.add_conditional_edges("search", lambda state: state["sender"], {"executor": "executor"})

# Connect start node to the generator
graph.add_edge(START, "generator")

# Run the graph
result = graph.run({"messages": [HumanMessage(content="What is the history of AI?")]})

# Output the final state
print(result)
```

This example showcases how LangGraph enables agents to work together, passing information between them via the graph's state. The "generator" agent produces research questions, which are then processed by the "executor." 

The "search" node allows the "executor" to utilize a search tool. The graph cycles through these agents, enriching the state until all questions are answered. 


## Advantages of LangGraph

LangGraph offers several key advantages for building resilient and effective language agents:

* **Advanced Workflows:** LangGraph supports complex, cyclic workflows, essential for sophisticated agent architectures.
* **Fine-Grained Control:** It provides precise control over the execution flow and state, enabling developers to build robust and reliable agents.
* **Persistence:**  Its built-in persistence allows for advanced memory capabilities and human-in-the-loop features, enhancing agent interactions. 
* **Scalability:** LangGraph can be easily scaled to handle large and complex multi-agent systems, making it suitable for real-world applications.

## Future Directions

The field of language agents is rapidly evolving.  Here are some potential future directions for LangGraph:

* **Integration with Other AI Tools:**  Exploring integration with other AI tools, such as reasoning engines, knowledge graphs, and planning systems, to augment agent capabilities.
* **Enhanced Observability and Debugging:**  Improving observability and debugging tools to facilitate the development and deployment of large, complex agent systems.
* **Standardized Agent Architectures:** Defining standard agent architectures to promote interoperability and reusability across different domains and applications. 

## Conclusion

LangGraph provides a powerful and flexible framework for building sophisticated and robust language agents. Its support for cycles, fine-grained control, persistence, and scalability makes it a compelling choice for building next-generation AI applications.

**Citations:**

1. LangChain Documentation: [https://langchain.readthedocs.io/en/latest/](https://langchain.readthedocs.io/en/latest/)
2. LangGraph Documentation: [https://langchain-ai.github.io/langgraph/](https://langchain-ai.github.io/langgraph/)
3. LangGraph GitHub Repository: [https://github.com/langchain-ai/langgraph](https://github.com/langchain-ai/langgraph)
4. Pregel: [https://en.wikipedia.org/wiki/Pregel](https://en.wikipedia.org/wiki/Pregel)
5. Apache Beam: [https://beam.apache.org/](https://beam.apache.org/)
6. NetworkX: [https://networkx.org/](https://networkx.org/)
7. STORM: [https://arxiv.org/abs/2305.11284](https://arxiv.org/abs/2305.11284)


