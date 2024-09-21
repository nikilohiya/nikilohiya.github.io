---
title:  "What is Langgraph and Multi Agent Systems?"
layout: post
author_profile: true
---


## Building Multi-Agent Systems with LangGraph: A Technical Deep Dive

This blog post delves into the intricacies of building complex multi-agent systems using LangGraph, an open-source framework designed for creating stateful, multi-actor applications with Large Language Models (LLMs). We'll explore the advantages of LangGraph over other frameworks, highlight key components, and showcase practical examples using LangGraph for building a multi-agent coder. 

### LangGraph: A Powerful Framework for Multi-Agent Systems

LangGraph stands out from other LLM frameworks due to its focus on enabling cyclic workflows, providing fine-grained control over application flow and state, and offering built-in persistence for advanced features like human-in-the-loop interactions and memory.

**Key Advantages of LangGraph:**

1. **Cycles:** LangGraph supports cyclical workflows, which are essential for most agent architectures. This contrasts with DAG-based solutions that can only execute linear flows.
2. **Controllability:** As a low-level framework, LangGraph grants developers fine-grained control over application flow and state, enabling the creation of robust and reliable agents.
3. **Persistence:** LangGraph includes built-in persistence, enabling advanced human-in-the-loop features, long-term memory, and the ability to maintain conversational context across multiple interactions.

**Core Components of LangGraph:**

- **Graph Structure:** LangGraph uses a graph structure to represent agent workflows, where each node represents an agent and edges define their connections and control flow. 
- **State Object:**  Each graph execution creates a state object that is passed between nodes. Nodes update this state with their return values, enabling the graph to maintain its internal state throughout execution.
- **Nodes:** Nodes represent individual agents or components within the graph, each responsible for a specific task or function.
- **Edges:** Edges define the connections and control flow between nodes. Conditional edges allow for dynamic routing based on the graph's state.

### Example: Building a Multi-Agent Coder

To illustrate the power of LangGraph, we will build a multi-agent coder that can write, test, and debug Python code. This example utilizes the `LangGraph` library and incorporates several agents:

- **Solution:** This agent is responsible for generating Python code based on problem statements.
- **Test Generator:** Generates input test cases and expected outputs for the generated code.
- **Executor:** Executes the code in a Python environment using the provided test cases.
- **Debugger:** Utilizes LLM knowledge to debug the code and sends it back to the `Executor` agent in case of errors.
- **Decision_To_End:** A conditional edge responsible for deciding whether to end the execution or send the code to the `Debugger` based on the `Executor`'s output.

**Code Snippet:**

```python
from langgraph import LangGraph
from langgraph.nodes import LLMAgentNode, ToolNode
from langgraph.edges import Edge
from langgraph.state import State

# Define agents and tools
solution_agent = LLMAgentNode(
    name="Solution", 
    llm=ChatOpenAI(temperature=0.7),
    prompt_template="Please write a Python function that solves the following LeetCode problem: {problem_statement}", 
)

test_generator = LLMAgentNode(
    name="Test Generator",
    llm=ChatOpenAI(temperature=0.7),
    prompt_template="Generate test cases for the following Python function: {code}. Provide both inputs and expected outputs.",
)

executor = ToolNode(
    name="Executor",
    tool=PythonREPLTool(),
)

debugger = LLMAgentNode(
    name="Debugger",
    llm=ChatOpenAI(temperature=0.7),
    prompt_template="The following Python code failed with the error: {error}. Please debug the code and provide a corrected version.",
)

decision_to_end = Edge(
    source="Executor",
    destination="END" if "No errors" in state.get("execution_result") else "Debugger",
)

# Build the graph
graph = LangGraph(
    name="Code Development Graph",
    state=State(),
)

graph.add_node(solution_agent)
graph.add_node(test_generator)
graph.add_node(executor)
graph.add_node(debugger)

graph.add_edge(Edge(source="START", destination="Solution"))
graph.add_edge(Edge(source="Solution", destination="Test Generator"))
graph.add_edge(Edge(source="Test Generator", destination="Executor"))
graph.add_edge(decision_to_end)

# Execute the graph
graph.run(state={"problem_statement": "Given an array of integers, return indices of the two numbers such that they add up to a specific target."})

# Output the final state
print(graph.state)
```

### Conclusion

LangGraph offers a powerful and flexible framework for building sophisticated multi-agent systems using LLMs. By leveraging its features for cyclic workflows, fine-grained control, and persistence, developers can create complex agents capable of performing a wide range of tasks, from code generation to problem-solving and decision-making. As the field of AI agents continues to evolve, LangGraph provides a robust foundation for building innovative and scalable applications. 
