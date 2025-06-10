---
sidebar_position: 46
slug: /conclusion-volatility-aggregation
title: Conclusion on Volatility Aggregation
description: A detailed exploration of how agent fluctuations determine aggregate volatility, challenging established misconceptions and offering new insights.
keywords: [volatility, aggregate variance, economic agents, idiosyncratic variance, power law]
tags: [economics, volatility, aggregation, non-linear fluctuations]
---

## Conclusion

Understanding in detail how the fluctuations of thousands of agents determine the volatility of aggregates is a complex task, yet not impossible. This complexity is highlighted by persistent misconceptions within the community, such as the outdated belief that with thousands of agents, idiosyncratic fluctuations must be nearly zero. Only recently has this misconception been widely dismissed.

In the case of French exporters and importers, it is observed that the decay of aggregate idiosyncratic variance with population size follows a power law: 

$$
\sigma^2_\epsilon \sim C N^{-\alpha}
$$ 

with $\alpha \approx 0.50$. Contrary to Gabaix's proposal, the rate of decay $\alpha$ is not related to characteristics of the size distribution. Instead, it would be $-1$ in a naive diversification setting if shocks at the firm level were linear. However, empirical evidence shows these shocks are exponential, i.e., non-linear. This is derived analytically and confirmed through computational experiments.

To explain how the observed variance of an economic aggregate arises, we must consider various mechanisms that interact in complex ways. Here is a summary of the key elements involved:

- **Variance Composition**: Variance is expected to be the sum of variance from aggregate shocks (comovement) and variance from the economy's parts (idiosyncratic variance). Depending on their magnitude, aggregate variance can be attributed to either component or a combination of both.

- **Off-Diagonal Variance Components**: These components, related to net cross-sectoral correlations or correlations between sector fluctuations and aggregate shocks, are expected to be null. However, they are never null in actual datasets and must be accounted for alongside aggregate comovement and idiosyncratic volatilities.

- **Idiosyncratic Contribution**: The size distributions of economic agents often follow a log-normal or power law (Pareto) distribution. This results in a concentration where few large agents account for significant variance, overshadowing the volatility of numerous small firms.

- **Effective Number of Agents**: Contributions to the idiosyncratic part of aggregate volatility $var[X]$ are weighted by the total value of agents, leading to an outcome that can be interpreted as a smaller effective number of agents. This breaks the $\sigma^2_\epsilon \sim 1/N$ rule.

- **Law of Large Numbers (LLN)**: In empirical settings, understanding LLN requires studying groups of fluctuating agents. Volatility arises from net comovement and self-variance of each agent. Empirical data shows agent fluctuations are multiplicative, increasing self-variances and comovement contributions, especially in large groups.

- **Variance Decay**: The variance of a group of agents decays with population size, following a milder rule than $1/n_q$, adapting to $\sigma^2 \sim n^{-\alpha} f(\mu, \hat \sigma)$. Large groups of small agents exhibit low volatility, but not as low as equal-weight groups of large agents.

Finally, the idiosyncratic aggregate variance inherits the decay rate $\alpha$ from its components, observed as:

$$
\sigma_\epsilon^2 = C N^{-\alpha}
$$

with $\alpha \approx 0.50$. This comprehensive analysis of aggregate variance in our empirical system reveals gaps in recent studies, likely due to the challenges of accounting for non-linear fluctuations. This paper aims to revise established conceptions and enhance understanding of non-intuitive features in economic agent populations.