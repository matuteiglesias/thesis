---
sidebar_position: 13
slug: /similarity-measures-us-counties-2
title: Similarity Measures in US Counties
description: Explore Pearson correlation and cosine similarity as key measures for analyzing employment levels and establishment numbers across US counties.
keywords: [Pearson correlation, cosine similarity, US counties, employment levels, NAICS]
tags: [data analysis, similarity measures, economic geography]
---

**Exploring Key Similarity Measures**

Among the various similarity measures explored, two will be used further in this paper as references for the entire family of US county-based similarity measures. These are:

- **Pearson correlation of $\log(X)$**
- **Cosine similarity of $X$**

Here, $X$ represents the observed employment levels or, alternatively, the number of establishments by US county and 4-digit NAICS activity.

### Pearson Correlation of $\log(X)$

The first measure, **Pearson correlation**, is justified because the distribution of values in the rows and columns of $X$ tends to become nearly Gaussian or well-defined when transformed by $\log(X)$. Computing Pearson correlation is sensible once matrix values exhibit a distribution closer to normal. 

Consider two industries, $X$ and $Y$, such that their employment levels satisfy $Corr(\log E_x, \log E_y) \approx 1$. This implies $\log E_y \sim a \ \log(E_x) + b$, where $a$ and $b$ are real coefficients of a line. Consequently, $E_y \sim e^{b} \ E^a_x$. In cases of high correlation (all pairs with correlation higher than 0.85), we can fit these linear regressions and find that $a \approx 1$ in all cases, and $b \approx 0$ with a standard deviation of 0.35. Overall, this indicates that a high correlation of log variables suggests the employment levels of the pair of industries are roughly proportional to each other.

### Cosine Similarity of $X$

The focus on the second measure, **cosine similarity**, arises from a first principles approach to the problem of coexistence of industry facilities. We will demonstrate in **Section: Continuous Measures** how cosine similarity can be used as a measure of actual coexistence (within a typical distance) of the locations belonging to a pair of industries.

### Linking Similarity Measures to Models

Now, we have two indicators of similarity that can be linked to models involving employment levels or spatial micro-foundations. Although we do not directly explore a link between the Pearson coefficient of the $\log$ variables and cosine similarity, these measures generally agree on identifying which pairs of industries show high similarity. They align with a larger family of measures capturing the same underlying characteristic: similarity by spatial distribution.

In the rest of the analysis, we will use both these measures, computed for the variables 'employment level' and 'number of facilities'. The four outcomes are not exactly equivalent, but they provide a coherent account of spatial patterns by which economic activities are distributed across the US. Results change more significantly when altering the similarity measure than when changing the observed variable.