---
sidebar_position: 31
slug: /conclusion-economic-correlation-structures
title: Conclusion
description: A comprehensive analysis of correlation structures in economic geography, exploring techniques and their implications.
keywords: [economic geography, correlation structures, cosine similarity, industry space]
tags: [economic geography, correlation analysis, industry space]
---


## Conclusion

This paper focuses on understanding the **correlation structures** derived from cross-sectional data of economic activities across geographical units. We first demonstrate the partial equivalence of various techniques for detecting coexistence from this data (see **Section: Discrete Techniques**). Subsequently, we delve into the connection to coexistence accounts computed from continuous space, which are based on establishments' point locations and employment levels (see **Section: Continuous Techniques**). From these similarity measures, we compute a network of industries, known as the **industry space**, revealing that communities within this network reflect clear geographical patterns linked to specific drivers of establishments' location.

### Key Findings

- Both employment and establishment data, whether in linear or log levels, show that **cosine similarity** tends to match **Pearson correlation**, and **covariance** is proportional to simple joint co-occurrence $X^TX$.
- Among techniques using cosine similarity, Pearson correlation, covariance, joint co-occurrence, or proximity as similarity measures on raw, log-transformed, or binarized location quotient data, there is a rank correlation. This indicates that these techniques lead to partially equivalent rankings of industry pairs by similarity.
- We primarily use **Pearson correlation of log levels** and **cosine similarity of linear levels** as proxies for the family of similarity measures due to their theoretical and practical interpretations.

### Continuous-Discrete Identity

Cosine similarity of vectors by area can be linked to the actual overlap of point locations. This continuous-discrete identity is deduced using calculus and validated through computational simulations. For square-shaped administrative areas, assuming an exponential decay of influence with distance, cosine similarity matches actual coexistence of facilities within a radius approximately 30% the size of the area width. This approach addresses the modifiable area unit problem in computing correlation structures.

### Industry Space and Spatial Patterns

By interpreting these similarity measures, we explore the 'industry spaces' they imply and map the neighborhoods of these networks. The goal is to validate the techniques by confirming that data-driven outcomes align with conceptual expectations. We identify distinct patterns explaining the spatial distribution of activities, such as:

- **Population** (consumer demand)
- **Natural Resources**: agriculture, fuels, minerals, forests, timber, coastal, and water economies
- **Manufacturing** (agglomeration forces)
- **Urban Externalities** in large cities

These themes and components of the correlation structure are briefly illustrated and discussed.

### Conclusion and Future Directions

This analysis, which employs empirical data and mathematical tools like correlation matrices, eigenvalue decomposition, and spectral clustering, results in a classification of activities. The findings align with Marshall's reflections on the geographical distribution of industries, confirming the relevance and accuracy of these insights. This paper highlights the potential of correlation structures computed from areal data as a robust tool in Economic Geography, paving the way for future studies to explore a variety of questions with confidence.

**Footnotes:**

1. Marshall, A. (1890). *Principles of Economics*. Ch. XI.
2. Hidalgo, C. A. (2007). *The Product Space Conditions the Development of Nations*.