---
sidebar_position: 30
slug: /micro-fluctuations-and-moments
title: Micro Fluctuations and Moments
description: An exploration of micro fluctuations in agents' characteristics, focusing on log-Laplace and log-normal distributions and their implications.
keywords: [micro fluctuations, log-Laplace distribution, log-normal distribution, moments, agents]
tags: [microeconomics, statistical analysis, probability distributions]
---

In the derivations that follow, we use the term *micro* to refer to agents' characteristics. The most likely value of log micro fluctuations is denoted as $\mu$, and the width of these fluctuations is denoted as $\hat \sigma$. These are often referred to as the **micro moments**.

### Log-Laplace Distribution

As an example, a log-Laplace distribution can be expressed as $10^{L(\mu, \hat \sigma)}$, with the definition of $L(\mu, \hat \sigma)$ provided in the appendix. The moments (levels) $M_D = M_N$ or $M_D = M_L$ around which the levels of quantiles $\tilde M_t = {S_{qt}}/{S^0_q}$ are situated, are described for log-normal micro shocks as follows:

$$
E[s^*_N] = M_N = E [10^{N(.)}] = 10^{\mu + \hat \sigma^2 \ln(10) / 2}
$$

**Equation Interpretation**: The level at which we observe the quantile part is $S_0 10^\mu$, with an additional expansion of $10^{\hat \sigma^2 \ln(10) / 2}$. This expansion is quadratic concerning the standard deviation of firm fluctuations. Importantly, this expansion occurs even when the population of agents has $\mu = 0$. Thus, even if the mean log growth is zero, the part will expand by a factor of $\frac{1}{2} \hat \sigma^2_q \ln(10)$ from its zero level.

> **Footnote**: For an intuitive approach to this effect, consider the geometric effect by which multiplicative shocks (i.e., log shocks) cause the mean of equal fluctuations to expand. For example, the mean between $1 \cdot (1 + \epsilon)$ and $1/(1 + \epsilon)$ is $M' > 1$, where $\epsilon$ plays the role of $\hat \sigma$. Applying this with $\epsilon = 0.05$, we find $[1.05 + 1/1.05]/2 = 1.00119 > 1$. Note that $M' = 1.00119 > 1$, and $\ln(M') = 0.00119 \approx \epsilon^2/2 = 0.05^{2}/2 = 0.00125$. This rule implies that doubling the firm-level shocks lets the total deviate four times as far from $S_0 10^\mu$.

### Log-Laplace Micro Shocks

For log-Laplace micro shocks, the expected value is:

$$
E[s^*_L] = M_L = E [10^{L(.)}] = \frac{10^{\mu}}{1 - \frac{1}{2} \hat \sigma^2 \ln^2(10)}
$$

A detailed derivation of these moments is available in the appendix. These expressions are well-known, but following their derivations can aid in understanding their implications. Essentially, they represent the mean of log-normal and log-Laplace distributions, indicating the level resulting from averaging these nominal fluctuations.

**Important Note**: Equation E_L is invalid if the denominator equals zero, i.e., when $\hat \sigma = \sqrt{2} \ln(10) \approx 0.61$. The average of log-Laplace shocks does not converge if $\hat \sigma > \sqrt{2}/\ln(10) \approx 0.61$. At this point, the potential expansion due to new agents overrides the averaging effect of the law of large numbers (LLN), causing divergence as $n$ increases. This dynamic is present in almost every result observed in this section, providing a benchmark for discussing the problem of a fluctuating population of agents.


For further exploration, refer to the appendix for a guided derivation of these moments and their implications.