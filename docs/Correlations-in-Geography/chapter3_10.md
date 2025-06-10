---
sidebar_position: 10
slug: /similarity-measures
title: The Similarity Measures
description: Explore various similarity measures such as Pearson correlation, cosine similarity, and covariance to understand relationships within data matrices.
keywords: [similarity measures, Pearson correlation, cosine similarity, covariance, data matrices]
tags: [data analysis, statistics, similarity]
---

## The Similarity Measures

When dealing with a matrix $X_{(n\times p)}$, it is often important to determine whether its columns or rows exhibit any relationships. This can be assessed using various association coefficients, such as the matrix product $X^{T} X$. Other measures include **Pearson correlation**, **cosine similarity**, and **covariance**. Let's explore these measures in detail for a pair of columns $X_j = \left( x_{1j}, \dots, x_{ij}, \dots, x_{nj} \right)^T $ and $X_{j'}$.

### Pearson Correlation

The Pearson correlation between columns $j$ and $j'$ is defined as:

$$
Corr(j, j') = r_{jj'} = \frac{\sum\limits_{i=1}^{n} (x_{ij} - \bar{X_j})(x_{ij'} - \bar{X_{j'}})} 
{||X_{j}-\bar{X_j}||  ||X_{j'}-\bar{X_{j'}}|| }
$$

Here, $j, j'$ represent a pair (e.g., a pair of industries), $\bar{X_j}$ denotes the mean of column $j$, and the square norm is defined as $||X_j - \bar{X_j}||=\sqrt{\sum_{i=1}^{n}(x_{ij}-\bar{X_j})^2 }$.

### Cosine Similarity

Cosine similarity is given by:

$$
CosSim(j, j') = r_{jj'} = \frac{\sum\limits_{i=1}^{n} x_{ij} \ x_{ij'}}
{||X_j|| ||X_{j'}||}
$$

It can be noted that $Corr(X_{j}, X_{j'}) = CosSim(X_{j}-\bar{X_j}, X_{j'}-\bar{X_j'})$.

### Sample Covariance

The sample covariance is calculated as:

$$
Cov(j, j') = \frac{1}{n} \sum\limits_{i=1}^{n} (x_{ij} - \bar{X_j})(x_{ij'} - \bar{X_{j'}})
$$

where $n$ is the number of observations.

These measures are interrelated, as evident from their formulas. In special cases, the matrix product $X^{T} X$, covariance matrix, cosine similarity, or Pearson correlation may become identical to one another.

If the column variables are centered (mean is zero), the covariance matrix is $Cov(Y) = Y^{T} Y / (n - 1)$, with $Y = X - \bar X$. When columns are z-standardized (demeaned and divided by the standard deviation), Pearson correlation matches the covariance: $Corr(Z) = Z^{T} Z / (n - 1)$ with $Z = (X - \bar X)/ std(X)$. If columns are unit-scaled (sum of squares is 1), the cosine similarity matrix is $Cossim(V) = V^{T} V$ with $V = X / ||X||$. Centering before unit scaling, i.e., $W = (X - \bar X) / ||X - \bar X||$, results in the Pearson correlation matrix equaling the cosine similarity matrix.

In practice, empirical data ($X$) often do not meet these special conditions, leading to differences among these measures. For instance, when counting populations or total nominal values of output or trade, the $X$ matrix is typically not centered. While normalization or standardization could be applied, it is crucial to evaluate whether such transformations are justified in the specific empirical context.

By understanding these similarity measures, we can better analyze the relationships within data matrices, providing valuable insights into the structure of the data.