---
sidebar_position: 11
slug: /estimation-plq
title: Estimation of pLQ
description: Detailed exploration of estimating probabilistic location quotients (pLQ) using k-nearest neighbor algorithm.
keywords: [pLQ, k-nearest neighbor, density estimation, probabilistic location quotients]
tags: [Estimation, Machine Learning, Data Analysis]
---


## Estimation of pLQ

In this section, we delve into the estimation of probabilistic location quotients (pLQ) using a **k-nearest neighbor (knn) algorithm**. This method is employed to estimate $Prob(LQ_{cp, t+1} > 1)$ given $log(s)$ and $log(S_c S_p / S_W)$, simplifying the $cp$ index for clarity. The task is akin to computing a density function, determining what fraction of points in a specific region of the ($log(s)$, $log(S_c S_p / S_W)$) plane satisfy the condition $LQ_{cp, t+1} > 1$.

### Methodology

Several approaches exist for this estimation, including partitioning the space into bins and calculating the fraction of $LQ_{t+1} > 1$ within them. However, the **knn method** is chosen for its efficiency. In this context, the $k$ nearest points in the feature space ($log(s)$, $log(S_c S_p / S_W)$) are used to compute the fraction of $LQ_{t+1} > 1$, which is then assigned to the probed point. A significant advantage of using knn is the fixed size of the neighbor set (set to $k = 200$ in both datasets), ensuring statistical robustness in sparse regions while allowing finer-grained modeling in denser areas.

### Binning and Uncertainty

To extract pLQ from observations, data is partitioned into log(LQ) quantiles (typically 75) and further divided along T quantiles (also typically 75). This results in a 2D binning with equal observations, creating $75^2 = 5625$ bins with almost 240 points each. Variations in this binning provide a measure of uncertainty for the computed pLQ values. Below is a sample of the computed pLQ values and their uncertainty, derived from applying 9 different 2D binnings:

| ccode | pcode | year | $\mu(pLQ)$ | $\sigma(pLQ)$ |
|-------|-------|------|------------|---------------|
| mus   | 2505  | 2012 | 0.249      | 0.026         |
| cyp   | 2807  | 2009 | 0.026      | 0.008         |
| mys   | 8705  | 2010 | 0.003      | 0.002         |
| ita   | 5907  | 2013 | 0.433      | 0.031         |
| mar   | 3808  | 2007 | 0.006      | 0.005         |

### Visualization

The outcomes are illustrated in **Figure 1**, where the estimated pLQ values are plotted as a function of the size factor ($y_2$) and $log(LQ)$ ($y_1$) on the left, and against observed values ($x_1 = log(s)$) and expectation $x_2$ on the right. The top plots represent trade data, while the bottom plots depict patent data. Both an ideal continuous probability function and its empirical data estimations are considered as *probabilistic location quotients* (pLQ).

### Additional Resources

For those interested in replicating this estimation, a minimal Python code snippet is available in the Appendix. This code allows estimation of pLQ given a dataset of observations, providing essential details on the knn regressor's function. The **binet** Python package includes the `computepLQ()` function, with source code available for verification. A minimal working example is accessible in this [notebook](https://github.com/matuteiglesias/pLQ_demo), requiring only basic Python and iPython notebook familiarity.

**Footnotes:**

1. For a comprehensive review of the knn method in the context of other regressor algorithms, see Wu (2008). An early discussion of the knn concept can be found in Loftsgaarden (1965).
2. A minimal snippet of Python code for estimating pLQ is included in the Appendix.