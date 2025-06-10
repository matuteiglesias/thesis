---
sidebar_position: 8
slug: /the-quest-for-volatility
title: The Quest for Volatility
description: An exploration of the dynamics of aggregate sales fluctuations, challenging misconceptions in the aggregation of micro-level fluctuations to macro-level volatility.
keywords: [volatility, aggregate sales, firm size distribution, micro dynamics, Gabaix, diversification]
tags: [economics, volatility, firm size distribution, aggregation]
---

**Understanding the Dynamics of Aggregate Sales**

To relate time series of national aggregate sales to the dynamics of a population of agents, we must consider two fundamental elements: the levels of sales of the agents and their evolution over time.

**Firm Size Distribution**

Empirical studies have shown that the size distribution of firms is usually stable over time, often fitting a lognormal or a power law, Pareto distribution. Notably, the evolution of firm sales has been debated extensively. Early hypotheses, such as the Brownian drift of firm logarithmic levels of sales, have been rejected due to significant autocorrelation patterns leading to stability. This autocorrelation indicates that the diffusion expected from an iid sequence of shocks is not observed, with a negative autocorrelation between $\log(S_t)$ and $\log(S_{t - 1})$. The distribution of growth rates can naturally be given as a distribution of log values, aligning with known results on domestic sales in countries other than France.

**Variance Aggregation and Granularity**

The aggregation of variance often leads to non-intuitive results. For instance, the standard deviation observed in total fluctuations from a population of $N$ normally fluctuating contributions should be of the order of $1/\sqrt{N}$. However, national or world aggregates fluctuate far more than this, even with large numbers of agents.

The 'granularity' paper by Gabaix (2011) argues that large, granular firms can be a source of aggregate volatility. Shocks to these large firms do not cancel out with shocks to smaller firms, resulting in aggregate fluctuations. However, when aggregating sales rather than production, Hulten's theorem is unnecessary, and value weight in aggregate idiosyncratic volatility stems from the log curve and variance.

**Challenges in Gabaix's Hypothesis**

Gabaix's hypothesis of uncorrelated cross covariance among agents is problematic when describing a population of economic agents. Micro fluctuations are relatively large, leading to comovements that are crucial to study. Gabaix assumes small, linear, and uncorrelated fluctuations, which do not align with empirical systems. The relation between the Herfindahl index and idiosyncratic volatility, as deduced, does not apply generally.

**Revisiting the Diversification Debate**

Gabaix's work has led to misconceptions, particularly the link between size distribution and the decay of volatility with population size. This misconception persists, despite the fact that micro fluctuations are multiplicative, and fat tails in agents' fluctuations contribute to the departure from the naive $1/\sqrt{N}$ rule.

**Conclusion**

Before Gabaix (2011), there was consensus that concentration and value share weights mean few agents can drive aggregate time series. However, Gabaix's paper has established misconceptions about the relationship between size distribution and volatility decay. The research community has largely focused on unrelated issues, neglecting further study of aggregate idiosyncratic volatility's dependency on population size.

In this work, we will follow the aggregation of agents' fluctuations from scratch to discern which elements of previous studies point to actual mechanisms and which should be reconsidered.