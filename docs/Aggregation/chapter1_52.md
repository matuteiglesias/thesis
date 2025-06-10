---
sidebar_position: 52
slug: /appendix-log-normal-log-laplace
title: "Appendix III: Log-Normal and Log-Laplace"
description: Explore the technical details of log-normal and log-Laplace distributions, including moments and variance calculations.
keywords: [log-normal distribution, log-Laplace distribution, moments, variance, equations]
tags: [mathematics, statistics, distributions]
---


## Appendix III: Log-Normal and Log-Laplace

The following section provides detailed formulas for growth distributions, focusing on the **log-normal** and **log-Laplace** distributions.

### Normal Distribution

The formula for a normal distribution is given by:

$$
N(\mu, \hat \sigma, x) = \frac{1}{\sqrt{ 2 \pi \hat \sigma^2 }} \exp\left( - \frac{ (x - \mu)^2 } {2 \hat \sigma^2} \right)
$$

### Lognormal Distribution

The lognormal distribution can be expressed as:

$$
10^{N(\mu, \hat \sigma, x)} = e^{N(m, \sqrt{V}, \ln10(x))}
$$

where:

- $m = \mu \ln(10)$
- $V = \sigma^2 \ln^2(10)$

Additionally, $D(\mu, \hat \sigma; n)$ denotes a draw of $n$ elements from the distribution $D(\mu, \hat \sigma)$.

### Moments of a Log-Normal

The expected value, or first moment, is:

$$
E[10^{N(\mu, \hat \sigma, x)}] = e^{m + V/2} = 10^{\mu + \sigma^2 \ln(10) / 2}
$$

In general, the k-th moment is:

$$
E[10^{k N(\mu, \hat \sigma, x)}] = \exp\left( \frac{k^2}{2}{\sigma}^{2} \ln^2(10) + k \mu \ln(10)\right) = 10^{\left( \frac{k^2}{2}{\sigma}^{2} \ln(10) + k \mu \right)}
$$

### Expectation Calculation

If the microshocks probability density function (pdf) is Gaussian, i.e., $p(t)=\exp(- (t - \mu)^2/(2 \sigma^2))/\sqrt{2 \pi} \sigma$, the expectation of $10^{k t}$ is:

$$
E[10^{k t}] = \int p(t) 10^{k t} dt = \frac{1}{\sqrt{2 \pi} \sigma} \int \exp\left( \frac{- (t - \mu) ^2}{2 {\sigma}^2} + \ln(10) k t \right) dt
$$

Completing the square in the exponential, we have:

$$
E[10^{k t}] = \exp\left( k \mu \ln(10) + \frac{k^2}{2}{\sigma}^{2} \ln^2(10) \right)
$$

### Special Cases

For a normal distribution $t$:

$$
E[10^t] = 10^{\mu + \frac{1}{2} \hat \sigma^2 \ln(10)} \approx 10^{\mu} \left(1 + \frac{1}{2} \hat \sigma^2 \ln^2(10)\right)
$$

$$
E[10^{2t}] = 10^{2 \mu + 2 \hat \sigma^2 \ln(10)}
$$

### Variance Calculation

The variance, defined as $var[10^{N(\cdot)}] = E[10^{2 N(\cdot)}] - E^2[10^{N(\cdot)}]$, is:

$$
E[10^{2t}] = 10^{2 \mu + \hat \sigma^2 \ln(10)} (10^{\hat \sigma^2 \ln(10)} - 1) \approx 10^{2 \mu} \left( (\hat \sigma \ln(10))^2 + o(\hat \sigma^4) \right)
$$

This section provides a comprehensive understanding of the moments and variance of log-normal distributions, which are crucial for various statistical analyses.