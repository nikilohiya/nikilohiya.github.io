---
layout: "splash"
title: "Contextual Retrieval: Enhancing Retrieval-Augmented Generation with Semantic Context"
categories: "AI-Engineering"
---

# Contextual Retrieval: Enhancing Retrieval-Augmented Generation with Semantic Context

## Introduction

Retrieval-Augmented Generation (RAG) has become a cornerstone of AI systems seeking to leverage external knowledge bases for more comprehensive and context-aware responses.  However, traditional RAG approaches often suffer from context loss, particularly when documents are split into smaller chunks for efficient retrieval.  This can hinder the ability of AI models to effectively interpret and utilize retrieved information.  In this post, we delve into Anthropic's novel approach to contextual retrieval, which significantly enhances retrieval accuracy by prepending chunk-specific explanatory context. 

## The Challenge of Context Loss in RAG

Consider a scenario where an AI system is tasked with retrieving information from a knowledge base containing financial reports.  A user might pose the query: "What was the revenue growth for ACME Corp in Q2 2023?".  A relevant chunk might contain the text: "The company's revenue grew by 3% over the previous quarter."  However, without additional context, it's difficult to determine which company this chunk refers to or the specific time period.  This lack of context can lead to retrieval failures and inaccurate responses from the AI model.

## Contextual Retrieval: Preserving Semantic Meaning

Anthropic's Contextual Retrieval addresses this issue by introducing two key sub-techniques:

* **Contextual Embeddings:**  Each chunk is augmented with a concise, explanatory context derived from the overall document.  This context provides crucial information about the chunk's origin and relevance, ensuring that the semantic meaning is preserved during retrieval.

* **Contextual BM25:**  Traditional BM25 (Best Matching 25) is a ranking function that utilizes lexical matching to identify precise word or phrase matches.  Contextual BM25 extends this approach by incorporating the enriched context provided by Contextual Embeddings. This hybrid approach allows for both semantic and lexical matching, leading to more accurate retrieval results.

## Implementing Contextual Retrieval

To implement Contextual Retrieval, Anthropic leverages their Claude language model and its prompt caching functionality.  A prompt is used to instruct Claude to generate concise, chunk-specific context that explains the chunk within the context of the overall document.

```python
# Example Claude prompt for generating contextual information
context_prompt = """<document>
{{WHOLE_DOCUMENT}}
</document>
Here is the chunk we want to situate within the whole document
<chunk>
{{CHUNK_CONTENT}}
</chunk>
Please give a short succinct context to situate this chunk within the overall document for the purposes of improving search retrieval of the chunk. Answer only with the succinct context and nothing else.
"""
```

This contextual text is then prepended to the original chunk before embedding and indexing.

## Performance Enhancements

Anthropic's experiments across various knowledge domains demonstrate the significant benefits of Contextual Retrieval.  They observed a 49% reduction in failed retrievals using the combined approach of Contextual Embeddings and Contextual BM25. Furthermore, adding a reranking step, which further prioritizes relevant chunks, led to an impressive 67% reduction in failed retrievals.

## Implementation Considerations

When implementing Contextual Retrieval, several key considerations are important:

* **Chunk Size and Boundaries:** The choice of chunk size and boundaries can significantly impact retrieval performance.  Carefully evaluate your knowledge base and choose chunk sizes that provide sufficient context while remaining manageable.

* **Embedding Models:**  Selecting appropriate embedding models is crucial for effective semantic matching.  Anthropic recommends models like Gemini or Voyage.

* **Prompt Engineering:**  Crafting effective prompts that provide relevant contextual information tailored to your specific domain is essential.

* **Reranking:**  Reranking can further enhance retrieval accuracy by prioritizing the most relevant chunks from the initial retrieval process.  Anthropic utilizes the Cohere reranker, but other options are available.

## Cost and Latency Considerations

While Contextual Retrieval offers significant performance gains, it's important to consider its impact on latency and cost.  The added step of generating and embedding contextual information can increase processing time.  Prompt caching, however, significantly mitigates this issue by reducing repetitive processing, making Contextual Retrieval more cost-effective for large knowledge bases.

## Future Directions

Contextual Retrieval represents a promising approach to improving retrieval accuracy in RAG systems.  Future research directions include:

* **Advanced Contextualization Techniques:** Exploring more sophisticated methods for generating and integrating contextual information.

* **Integration with Other Retrieval Techniques:** Combining Contextual Retrieval with other retrieval approaches like graph-based methods or query refinement techniques.

* **Evaluation on Diverse Datasets:**  Conducting thorough evaluations across a broader range of knowledge domains and retrieval tasks to validate the generalizability of Contextual Retrieval.

## Conclusion

Contextual Retrieval is a powerful technique for enhancing RAG systems by addressing the critical challenge of context loss.  Anthropic's innovation provides a valuable tool for developers building AI applications that rely on knowledge bases, enabling more accurate, context-aware, and effective interactions.  By embracing Contextual Retrieval, we move closer to AI systems that not only access information but truly understand its meaning and relevance.

## Citations

1. [Anthropic's Blog Post on Contextual Retrieval](https://www.anthropic.com/news/contextual-retrieval)
2. [MTEB: Embeddings Benchmark](https://github.com/embeddings-benchmark/mteb)
3. [Groq Open Weight Models](https://groq.com/)
4. [NotebookLM](https://notebook.ai/)
5. [RAGAS: RAG Assessment Tool](https://docs.ragas.io/en/stable/)
6. [RAPTOR: Recursive Abstractive Processing for Tree-Organized Retrieval](https://arxiv.org/abs/2401.18059)
7. [SelfRAG: Self-Reflective Retrieval-Augmented Generation](https://selfrag.github.io/)
8. [Agentic RAG: Agentic Retrieval-Augmented Generation](https://langchain-ai.github.io/langgraph/tutorials/rag/langgraph-rag/)
9. [GraphRAG: Graph Retrieval-Augmented Generation](https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-the-power-of-knowledge-graphs-for-retrieval-augmented-generation/)