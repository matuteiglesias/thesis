---
sidebar_position: 16
slug: /mathematical-framework-aggregate-volatility-log-scale
title: "Mathematical Framework: Aggregate Volatility in Log Scale"
description: Explore the mathematical framework for understanding aggregate volatility in log scale, focusing on variance and covariance among agents.
keywords: [aggregate volatility, log scale, variance, covariance, mathematical framework]
tags: [mathematics, volatility, economics]
---


## Mathematical Framework: Aggregate Volatility in Log Scale

In this section, we delve into the technical aspects of aggregate volatility, focusing on a population of agents contributing to total exports or imports. The aim is to express the variance of the time series of the total, $var[X_T]$, in terms of parameters describing the population of agents.

### Understanding Aggregate Variance

The aggregate variance $var[X_t]$ measures the width of fluctuations in aggregate sales. By taking its square root, we arrive at the standard deviation of $X_t$: 
$ {var^{1/2}[X_t]} = std[X_t] $
However, for practical purposes, we focus on $var[X]$ as a measure of volatility, leaving the square root for the final step.

In previous sections, we discussed how agent sales and their fluctuations are best described on a log scale. Here, we review how fluctuations expressed in log levels should be integrated into variance accounting.

### Easy Facts About Volatility

Consider a time series $X_t$ of length $T$. An estimator of its mean value is given by:
\[ \bar X \equiv \sum_t X_t / T \]

To account for deviations of elements of $X_t$, we define:
\[ (\Delta X)_t \equiv \Delta X \equiv X_t - \bar X \]

The unbiased sample variance of $X_t$ is:
$$
var(X_t) = \frac{\sum_t  (\Delta X)^2}{T - 1}
$$
This serves as an estimator of the population variance of the time series. The biased sample variance is:
$$ \hat {var} (X_t) = \sum_t  (\Delta X)^2 / T $$

In a normal iid distribution, the variance computed on a finite sample of length $T$ relates to the variance at the large $T$ limit by:
$$ \lim_{T \to +\infty} var(X_t) = var(X_t) (T - 1)/T  = \hat {var} (X_t) $$

For our purposes, using sample variances computed on time series of length $T = 17$, we have:
$$ {var} (X_t) = 1.0625\ \hat {var} (X_t) $$
This factor is crucial when comparing volatilities measured in different studies.

### Aggregate Variance and Covariance

The expression of total sales as a linear combination ($X \equiv \sum_k S_{k}$) is quite general. Components $S_{k}$ can represent individual agents or groups of agents (sectors). The aggregate variance is the sum of cross covariances among these parts:
$$
var\left[\sum_k S_{k}\right] = cov \left( \sum\limits_{k} S_{k}, \sum\limits_{k} S_{k}  \right) =  \sum\limits_{k_1, k_2} cov(S_{k_1}, S_{k_2})
$$

This property is essential as it provides a general expression of aggregate sales variance in terms of covariances among its parts. It remains valid regardless of the details of parts' fluctuations and their cross correlations. Here, we introduce the sample covariance operator:
$$
cov(S_{k_1}, S_{k_2}) = 
E\left[   \Delta S_{k_1, t} \cdot \Delta S_{k_2, t}  \right]  T/(T - 1)  
\equiv  \sum_t \left( \left(S_{k_1, t} - \bar {S_{k_1}}\right) \left(S_{k_2, t} - \bar {S_{k_2}}\right) \right) / (T - 1)
$$

Aggregate variance encompasses all these elements, similar to how total sales must include all agents' sales for an exact match.

---


1. In our case, $T = 2014 - 1997 = 17$. See *Section: Data Details* for more information.
2. This factor would be necessary when comparing volatilities measured in different studies.