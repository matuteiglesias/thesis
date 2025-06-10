---
sidebar_position: 25
slug: /reviewing-diversification-issues
title: Reviewing the Diversification Issues
description: An in-depth analysis of the diversification issues in aggregate time series, focusing on the volatility contributions from numerous agents and the implications of idiosyncratic and aggregate shocks.
keywords: [diversification, volatility, aggregate time series, idiosyncratic shocks, aggregate shocks]
tags: [economics, volatility, diversification, aggregate shocks]
---

## Reviewing the Diversification Issues

When a national or global aggregate time series is constructed from the contributions of thousands or even millions of agents, a natural question arises: **Why don't their idiosyncratic shocks cancel out?**

The intuition suggests that the volatility of such a time series should decrease as $\sigma \sim 1/\sqrt{N}$, where $N$ is the number of agents. This decay rate is typical in a population of agents with additive Gaussian fluctuations. This concept is often referenced, as seen in the observation by Lucas (1977): *"... in a complex modern economy, there will be a large number of such shifts in any given period, each small in importance relative to total output. There will be much 'averaging out' of such effects across markets."*

### Aggregate Standard Deviation

Is the magnitude of the aggregate standard deviation approximately $1/\sqrt{N}$? If not, why?

A quick response is that it is not, because all agents can experience growth or decline due to an 'aggregate shock' that exceeds $1/\sqrt{N}$. Lucas (1977) also noted: *"... there have been many instances of shocks to supply which affect all, or many, sectors of the economy simultaneously. Such shocks will not cancel in the way I have described, and they will induce output fluctuations in the aggregate."*

The question then becomes whether the idiosyncratic part of aggregate volatility follows a $1/\sqrt{N}$ rule. The answer is that it declines more mildly, but this issue requires a careful approach.

### Variance and Covariance in Sectoral Fluctuations

Consider a partition of firms into sectors with mild fluctuations. From previous equations, the variance of the log of $X$ is approximately:

$$
var [\log(X)] \approx \frac{var[X]}{ \left( \ln(10) E[X] \right)^2} \approx \sum_{i, j} \frac{\bar S_i \bar S_j}{\bar X^2} \operatorname{cov} (F_i, F_j)
$$

where $i, j$ denote pairs of parts $p$. Sectoral log fluctuations can be expressed as $F_{pt} = m_{pt} + \sigma_p \epsilon_{pt}$. Thus, the covariance is:

$$
\begin{split}
\operatorname{cov} (F_i, F_j) = & cov(m_{it} +  \sigma_i \epsilon_{it}, m_{jt} +   \sigma_j \epsilon_{it}) \\
= & cov(m_{it}, m_{jt}) + cov(m_{it},  \sigma_j\epsilon_{jt})  \\
& + cov(  \sigma_i \epsilon_{it}, m_{jt} )+  cov(  \sigma_i \epsilon_{it},   \sigma_j \epsilon_{jt})
\end{split}
$$

This equation contains $P^2$ elements to be summed for aggregate variance. In special cases, this expression simplifies, providing insights into real-life settings.

### Uncorrelated Shocks and Unit Variance

For uncorrelated shocks of unit variance, $var(\epsilon_{it}, \epsilon_{jt}) = \delta_{ij}$ (Kronecker's delta), the equation simplifies to:

$$
var [\log(X)] \approx \sum_{i, j} \frac{\bar S_i \bar S_j}{\bar X^2} \left[ cov(m_{it}, m_{jt}) + \sigma_j cov(m_{it}, \epsilon_{jt})  +   \sigma_i  cov(\epsilon_{it}, m_{jt} )+  \sigma_i  \sigma_j \delta_{ij} \right]
$$

If time series $m_{pt}$ are uncorrelated with idiosyncratic shocks, then:

$$
var [\log(X)] \approx \sum_{i, j} \frac{\bar S_i \bar S_j}{\bar X^2} \left[ cov(m_{it}, m_{jt}) +\sigma_i  \sigma_j \delta_{ij} \right]
$$

### Aggregate and Idiosyncratic Shocks

Aggregate shocks and idiosyncratic shocks both contribute to aggregate volatility, and either can dominate. Early solutions assumed idiosyncratic variance vanishes at a rate $\sigma^2 \sim 1/N$, yet empirical evidence shows a milder decay.

If all parts $p$ share a single $m_{pt}$ term:

$$
var [\log(X)] \approx \sum_{i, j} \frac{\bar S_i \bar S_j}{\bar X^2} \left[ var(m_{pt}) +\sigma_i  \sigma_j \delta_{ij} \right]
$$

For parts of nearly equal size, $\bar S_p / \bar X \approx 1/P$, the sum yields:

$$
var [\log(X)] \approx  \underbrace{\frac{\bar S_p^2}{\bar X^2} \ P^2 var(m_{pt})}_{\text{$\sigma^2_m$}}   +
 \underbrace{ \sum_{p} \frac{\bar S_p^2}{\bar X^2} \sigma_p^2}_{\text{$\sigma^2_\epsilon $}}   = \underbrace{var(m_{pt})}_{\text{$\sigma^2_m$}}   +
 \underbrace{ \frac{1}{P^2} \sum_{p} \sigma_p^2 }_{\text{$\sigma^2_\epsilon $}}  
$$

Linear variance is:

$$
var [X] \approx \ln^2(10) \left( \bar X^2 var(m_{pt}) + \sum_p \bar S^2_p \sigma^2_p\right)
$$

### Effective Number of Agents

The effective number of agents $N_{eff}$ may be less than the actual number $N$, due to the concentration of contributions among a few large agents. For example, 100 companies might account for half the exports, and 10,000 for the other half, leading to $N_{eff} \approx 330$, not $N = 10100$.

### Idiosyncratic Variance Decay

Gabaix (2011) suggests a power law size distribution leads to a milder decay $\sigma_\epsilon^2 \sim N^{-\alpha}$. However, this is derived for the Herfindahl index and not directly applicable to aggregate idiosyncratic variance. The assumption that $\sigma_k$ is constant across agents is unrealistic.

The proposition in Gabaix (2011) should be limited to Herfindahl index decay, not aggregate idiosyncratic variance. Further investigation is needed to understand the decay of idiosyncratic variance with population size.

In subsequent sections, tools are provided for studying the $\sigma_\epsilon^2 \sim N^{-\alpha}$ dependence, showing how nonlinearities contribute to comovement terms among agents.