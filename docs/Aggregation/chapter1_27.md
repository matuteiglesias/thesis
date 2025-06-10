---
sidebar_position: 27
slug: /aggregating-group-agents-sum-powers
title: "Aggregating a Group of Agents: Sum of Powers"
description: Explore the aggregation of fluctuating agents, focusing on variance relations and quantile analysis.
keywords: [aggregation, agents, variance, quantile, log-normal distribution]
tags: [economics, statistics, data analysis]
---


## Aggregating a Group of Agents: Sum of Powers

We have explored the dynamics between parts and the total, and now it's time to delve into the interactions among agents within these parts. This section focuses on groups of fluctuating agents.

One of our objectives is to understand a potential relationship $\sigma_p^2 = f(n_p)$ between the parts' variance and population. For instance, empirical observations suggest that idiosyncratic aggregate variance can be described by $\sigma_\epsilon^2 = C' N^{-\alpha}$, similar to **Equation 1**.

Additionally, we aim to determine the dependence between $\sigma_p^2$ and the moments of the log micro fluctuations (denoted as $\mu$ and $\hat \sigma$).

To reconstruct aggregate volatility from quantiles volatility, additional information about their cross-correlations is necessary. This involves understanding whether aggregate shocks exist. **Equations 2 to 4** provide guidance on arriving at aggregate variance once sectoral volatilities are known.

For this analysis, agents are arranged into $Q$ *quantile parts* (denoted as $q$), as opposed to $P$ *random parts* (denoted as $p$) used previously. Partitioning into quantile parts involves sorting agents by size before splitting them into $Q$ parts, each concentrating nearly equal values $\bar S_q = \bar X / Q$. This sorting ensures that agents in each quantile part have similar sizes, allowing for deeper analysis than with random parts.

To determine the variance that a group's time series can exhibit, it's essential to understand how the group's level is expressed in terms of its agents' contributions. Subsequently, the moments of the quantile parts' time series can be computed.

The challenge lies in that firm sales are expressed as exponential levels. Denoting the sales of firm $i$ in linear levels by $s_i$ and in log levels by $x_i$, the total sales of a quantile part $q$ are given by:

$$
S_{qt} = \sum_{i \in q} s_{i} =  \sum_{i \in q} 10^{x_i}
$$

Here, the sales of firms $s_{i}$ are observed at a specific time step $t$, and the same applies to the log levels $x_i$.

Firms are assumed to be at their *zero fluctuation* level $x_i^0$, fluctuating to the observed level $x_i$. In linear scale, this zero level is $10^{x^0_{i}} \equiv s^0_{i}$. The quantile total at zero fluctuations is $S^0_q = \sum_i 10^{x^0_i}$, with a single zero level for any time step $t$.

To start, consider the ratio $S_{qt}/S^0_q$ between the observed quantile level and the zero quantile level:

$$
\frac{S_{qt}}{ S^0_q} =\frac{\sum\limits_i^{n_q} 10^{x^0_i + D(\cdot)}} {\sum\limits_i^{n_q}10^{x^0_i}}  
$$

Where $D(.)$ is the distribution of log fluctuations defined as differences to mean values, as depicted in **Figure 1**. The log level of firm $i$ observed at a time step can be denoted $x_i = x^0_i + D(\cdot)$. It's important to distinguish these from the distribution of growth rates, as shown in **Figure 2**. Real distributions $D(.)$ do not have a closed form and acknowledge the accumulation of subsequent growth rates, implicitly acknowledging possible growth rates' auto-correlation. Empirical $D(.)$ may often be described through a mixture of normals. If $D(\cdot)$ is, for example, a normal distribution, then $10^{D(.)}$ is log-normal. **Equation 5** can refer to a time series or a single observation, indicating the level sales of a quantile part $q$.

B. Mandelbrot has discussed some features of sums of log-normal distributions (Mandelbrot, 1997). Despite the complexity of sums like $10^{x_1} + 10^{x_2}$, if we accept multiplicative growth as in works by Gibrat, Stanley, and Bottazzi, then adding and subtracting firm sizes (in dollars) becomes necessary. Mandelbrot warns that this path is not the most natural, but it is dictated by the empirical system.

Note that Mandelbrot refers to size distributions, not distributions of micro fluctuations. Although the general problem is complex, tracking sums in the context of micro fluctuations distribution is not as difficult. Sums of powers have been studied for engineering applications, providing technical guidance. Marlow (1967) shows that under general conditions, the sum of draws from a log-normal (and thus also the mean) will be normally distributed. This opens the path for estimating the moments of such a distribution. Recent works on summing powers include Schwartz (1982), Beaulieu (2004), and Santos Filho (2005), although their parameter ranges may differ from ours.

---

**Footnotes:**

1. The index $t$ on firm level expressions is omitted for clarity.
2. The distribution of means of draws from a log-normal is denoted as $s^*_N$ in subsequent paragraphs.