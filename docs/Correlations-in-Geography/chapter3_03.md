---
sidebar_position: 3
slug: /economic-geography-spatial-distribution
title: Introduction to Spatial Distribution in Economic Geography
description: An exploration of spatial distribution patterns in Economic Geography, focusing on correlation structures and methodologies.
keywords: [Economic Geography, spatial distribution, correlation structures, agglomeration, locational correlations]
tags: [Economic Geography, Spatial Analysis, Correlation]
---

## Introduction

The study of spatial distribution patterns in Economic Geography is crucial for understanding various phenomena such as agglomeration externalities, knowledge diffusion, and regional development. Researchers often aim to condense spatial information about economic activities into indices that highlight special features of interest.

**Key Studies and Methods:**
- **Ellison and Glaeser, Duranton and Overman:** These studies focus on spatial concentration by computing pairwise distances among industry establishments and comparing them to a null model.
- **Porter (2003):** This approach involves computing a correlation matrix from cross-sectional employment data by US state, suggesting that high spatial correlation indicates "locational linkages" between activities.

In some cases, **co-occurrence measures** are used, as seen in Hidalgo et al. (2007), who apply proximity measures on export data to estimate a network of products, known as the "product space." This method has inspired research into inferred networks of economic activities, technologies, or regions, emphasizing the concept of **relatedness** (Hidalgo, 2018).

Although the product space technique appears unrelated to previous methods, the proximity derived can be seen as a correlation structure similar to that of Porter (2003). Understanding these correlation structures can solidify the foundations of research within Economic Geography, especially when spatial interpretations are necessary.

### Critical Open Issues

1. **Data Transformation and Similarity Measures:**
   - There is no unified criterion for transforming raw data and computing similarity measures, leading to incomparable results across studies.
   - Methodological decisions often align with mathematical tools but deviate slightly, complicating formal study.

2. **Formal Treatment of Space:**
   - Physical distance is crucial in Economic Geography, yet its role in locational correlations is unclear. This paper aims to reconcile correlations from administrative data with continuous space accounts.

### Addressing the Issues

To tackle the first issue, we use data on the number of employees and establishments by industry (NAICS) and county in the US. We compare similarities across industries using various data processing techniques (e.g., log transformation, binarized location quotient) and similarity measures (e.g., cosine similarity, Pearson correlation). These **discrete similarity measures** often yield partially equivalent rankings of industry pairs.

For the second issue, we compare overlap expressions in continuous space with discrete measures. Analytical and computational experiments reveal a close relation between cosine similarity and coexistence in continuous space. Specifically, computing cosine similarity of employment levels in counties equates to superposition in continuous space with exponential decay density around establishments.

### Exploring Co-occurrence

By examining co-occurrence from employment data, we classify industries by spatial distribution. Detected communities in the correlation structures reflect spatial patterns, aligning with long-theorized economic phenomena. These classifications highlight large cities, population distribution, natural resources, and predominant activities, offering a dimensionality reduction from over 3000 counties to a few patterns.

The results advocate for using correlation structures as an objective tool in studying spatial patterns. These networks, sometimes called "industry space," provide insights into related industries and their relations, addressing themes in works like Frenken (2007) and Kemeny (2014).

### Paper Organization

- **Section 2:** Literature review on co-occurrence measures.
- **Section 3:** Data description.
- **Section 4:** Overview of methods, notation, and terminology.
- **Section 5:** Unification of discrete coexistence measures.
- **Section 6:** Matching discrete measures with a continuous space model.
- **Section 7:** Discussion of US correlation structures.
- **Section 8:** Conclusion.
