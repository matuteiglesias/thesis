---
sidebar_position: 19
slug: /non-linearities
title: Non-Linearities
description: Explore the implications of logarithmic transformations in economic fluctuations, focusing on nonlinearities and their practical applications.
keywords: [logarithmic transformation, nonlinearities, Taylor series, economic fluctuations]
tags: [economics, mathematics, transformations]
---

## Non-Linearities

**Understanding Nonlinearities in Economic Fluctuations**

Fluctuations in the level of agents, when expressed on a logarithmic scale, imply that nominal contributions from different agents are represented by an exponential function. In this context, nonlinearities refer to the addition of levels along an exponential curve. Let's delve into the general properties of a logarithmic transformation.

### Logarithmic Transformations

Consider a scenario where 100 extra EUR sold by a firm directly translates to aggregate exports. Although this amount seems 'insignificant' compared to total exports, which can exceed 100 billion EUR, this insignificance can be formalized by examining the ratio between these levels. For instance, the ratio is 1.0000001, indicating that aggregate exports remain largely unchanged after the 100 EUR addition. This can be expressed as $S_t / S_0 = (10^9 + 10^2)/ 10^9 = 1 + 10^{-7}$, a useful transformation for abstracting changes from the nominal scale.

Alternatively, considering equal **multiplicative changes** to $X$ as equally important (rather than their **additive** magnitude) is achieved by evaluating **additive changes** of a logarithmic transformation of $X$, denoted $\log(X)$.

### Taylor Series Approximation

For practical purposes, we can treat $\log(z): \mathbb{R} \rightarrow \mathbb{R}$ as a nonlinear function approximated by a Taylor series. The base is 10, unless otherwise stated. Its Taylor series about $z_0$ is:

$$
\log(z)\ \ln(10) = \log(z_0) +\sum_{n \geq 1} (-1)^{n + 1} \frac{(z - z_0)^n}{n\ z_0}
$$

where the factor $\ln(10) \approx 2.3026$ is the natural logarithm of 10. This factor appears repeatedly due to our use of base 10 instead of natural logarithms, aiding in the interpretation of log levels (e.g., 6 = 1 million EUR, 9 = 1 billion EUR).

### First Order Approximation

The expansion of $\log(z)$ (base 10) at $z_0 = 1$ up to the first order is:

$$(z - 1) \approx \ln(10) \log(z)$$

This relation becomes practical if we identify $z = X_t / \bar X \approx 1$, leading to:

$$
\frac{X_t - \bar X}{\bar X} \approx \ln(10) \log\left(\frac{X_t}{\bar X} \right) \Rightarrow \frac{\Delta X}{\bar X} \approx \ln(10) \Delta (\log(X))
$$

This equation highlights the connection between small nominal deviations from the stationary level $\bar X$, percentage change factors, and logarithmic fluctuation. It's crucial to recognize when this equation does not apply, which is fairly often.

### Second Order Approximation

Approximating the log curve at $z_0 = 1$ to the second order gives:

$$\log(z)\ \ln(10) \approx (z - 1) - \frac{1}{2}(z - 1)^{2}$$

Thus, the rough condition for the first order approximation to be valid requires:

$$ \frac{({\Delta X}/{\bar X})^2}{2} \ll 1 $$

The second order error term is about 0.005 for deviations of 10\% and 0.1 for deviations of 50\%. This means that for time series fluctuating around 10\% or less, it is safe to use the first order approximation, but not for more volatile series.

### Inverse Logarithmic Fluctuations

Define logarithmic fluctuations as:

$$
F_t \equiv \log \left( \frac{S_t}{\bar S} \right)
$$

Inverting this relation, we have:

$$
S_t / \bar S = 10^{F_t}
$$

Subtracting 1 from both sides, we express additive deviations $\Delta S$ in terms of logarithmic fluctuations:

$$
\Delta S_t /\bar S = 10^{F_t} - 1
$$

This exact relation between nominal additions and logarithmic fluctuations is observed in a time series. A Taylor expansion of this exponential curve brings us back to the approximate expression:

$$
10^{F_t} - 1 = \ln(10)(F_t) + \frac{1}{2}\ln^2(10)(F_t)^2 + O(F_t)^3
$$

Thus, up to first order:

$$
\Delta S_t/\bar S \approx \ln(10) F_t
$$

This requires that $\frac{1}{2}\ln^2(10) F^2_t \ll 1$, meaning log fluctuations should be $F_t \approx .1$ or smaller. This condition is usually met by aggregate sector fluctuations, but not by firm-level fluctuations.

---

**Footnotes:**

1. The factor $\ln(10)$ originates from using base 10 logarithms, providing intuitive interpretations for log levels (e.g., 6 = 1 million EUR, 9 = 1 billion EUR).