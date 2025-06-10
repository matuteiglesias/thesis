---
sidebar_position: 20
slug: /mean-variance-transformed-random-variables
title: Mean and Variance of Transformed Random Variables
description: Explore the estimation of moments for logarithms of aggregate sales using Taylor expansion, focusing on expected value and variance.
keywords: [mean, variance, transformed random variables, Taylor expansion, logarithm, aggregate sales]
tags: [statistics, probability, transformations, Taylor expansion]
---

## Mean and Variance of Transformed Random Variables

To estimate the moments (expected value and variance) of the logarithm of aggregate sales, we can utilize a **Taylor expansion** for the moments of the function $f(x) := \log(x)$, where $x$ is a random variable $X$. Below are the key derivatives:

- **First Derivative:** $f'(x) = \frac{1}{\ln(10) x}$
- **Second Derivative:** $f''(x) = -\frac{1}{\ln(10) x^2}$

Using these, the expected value and variance of $\log(X)$ can be approximated as follows:

**Expected Value:**

$$
\operatorname{E}\left[\log(X)\right] \approx \log(\operatorname{E}\left[X\right]) - \frac{1}{2 \operatorname{E}\left[X\right]^2 \ln(10)} \operatorname{var}\left[X\right]
$$

**Variance:**

$$
\operatorname{var}\left[\log(X)\right] \approx \frac{1}{\left(\ln(10) \operatorname{E}[X]\right)^2} \operatorname{var}\left[X\right]
$$

The approximation's order depends on the magnitude of fluctuations in $X$. For large national economies' gross exports or imports, linear terms suffice, allowing us to express $\operatorname{E}\left[\log(X)\right] \approx \log(\operatorname{E}\left[X\right])$ and $\operatorname{var}\left[\log(X)\right]$ as shown above.

In the context of the variance equation, $\operatorname{var}\left[\log(X)\right]$ and $\operatorname{var}\left[X\right]$ are proportional. Notably:

- $\sigma^2(\log(X)) \sim 1$
- $\sigma^2(X) \sim 10^{20}$ if $\bar X \sim 10^{11}$ in EUR.

Additionally, the variance of the ratio $X/\bar X$ is:

$$
\operatorname{var}\left[\frac{X}{\bar X}\right] = \frac{\operatorname{var}[X]}{\bar X^2} \approx \ln^2(10) \operatorname{var}[\log(X)]
$$

The variance of log levels is closer in magnitude to the variance of $(X_t/X)$, differing by a factor of $\ln^2(10) \approx 5.3$.

**Note:** Alternative derivations can be made using approximate linear relations or first-order approximations, leading to similar conclusions about the proportionality between the variances of $X$ and $\log(X)$.