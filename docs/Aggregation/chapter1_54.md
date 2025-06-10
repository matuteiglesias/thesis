---
sidebar_position: 54
slug: /moments-of-a-log-laplace
title: Moments of a Log-Laplace
description: Explore the mathematical derivation and properties of moments in a log-Laplace distribution, including detailed equations and theoretical insights.
keywords: [log-Laplace, moments, Laplace distribution, mathematical derivation, equations]
tags: [mathematics, statistics, probability]
---

## Moments of a Log-Laplace

The **Laplace distribution** is defined as:

$$
L(\mu, b, x) = \frac{1}{2b} \exp\left(-\frac{|x - \mu|}{b}\right) = \frac{1}{\sqrt{2} \hat{\sigma}} \exp\left(-\frac{|x - \mu|}{\hat{\sigma}/\sqrt{2}}\right)
$$

The parameters $\hat{\sigma} = \sqrt{2} b$ are proportional to each other and are measures of the width of the distribution. Using $b$ is a common convention, but $\hat{\sigma}$ has the benefit of being the actual standard deviation observed.

The **log-Laplace** in base 10 is expressed as $10^{L(\mu, \hat{\sigma}, x)}$. A good reference for this is in Kozubowski (2003).

To derive the first moment in the simplified case of a symmetric shocks distribution and mean zero, we compute the expected value $E[10^t]$ when $t$ is distributed as a Laplace.

### Derivation of the First Moment

To compute $E[10^t]$, we separate the negative and positive expressions for the Laplace shocks PDF:

$$
E[10^t] = \int\limits_{-\infty}^{0} p(t) 10^t \, dt + \int\limits_{0}^{\infty} p(t) 10^t \, dt
$$

Knowing the expression of the indefinite integral of $10^t p(t)$, we evaluate it at the integration limits (Barrow's rule):

$$
\int 10^t \exp(\pm t/b)/(2b) \, dt = 10^t \exp(\pm t/b)/(2 (b \ln(10) \pm 1))
$$

Thus, the expected value is:

$$
E[10^t] = \frac{1}{2 (b \ln(10) + 1)} \left[ \exp(t/b) 10^t \right]_{-\infty}^{0} + \frac{1}{2 (b \ln(10) - 1)} \left[\exp(-t/b) 10^t \right]_{0}^{\infty}
$$

Using $10^t = e^{\ln(10) t}$, this simplifies to:

$$
E[10^t] = \frac{1}{2 (b \ln(10) + 1)} \left[ \exp([1/b + \ln(10)] t) \right]_{-\infty}^{0} + \frac{1}{2 (b \ln(10) - 1)} \left[ \exp([-1/b + \ln(10)] t) \right]_{0}^{\infty}
$$

The mean will diverge unless the exponentials are zero at infinity, requiring $\hat{\sigma} < \sqrt{2}/\ln(10) \approx 0.61$. Theoretical mean values diverge upwards when approaching this $\hat{\sigma}$ level. Experiments show an 'explosion' upwards for $\hat{\sigma}$ above this level, although they are finite due to a bounded number of agents ($N$).

Evaluating the primitive at the limits gives:

$$
E[10^t] = \frac{1}{2 (b \ln(10) + 1)} - \frac{1}{2 (b \ln(10) - 1)} = \frac{1}{1 - (b \ln(10))^2}
$$

If the Laplace shocks are centered at $\mu \neq 0$, then the mean is multiplied by $10^\mu$:

$$
E[10^t] = \frac{10^\mu}{1 - (b \ln(10))^2} = \frac{10^\mu}{1 - \frac{1}{2}\sigma^2 \ln^2(10)}
$$

### General Expression for Moments

An expression for the moments of a log-Laplace, generalizing to possible asymmetries, is given by Kozubowski (2003):

$$
E[10^{k t}] = \int p_L(t) 10^{k t} \, dt = 10^{k \mu} \frac{\alpha \beta}{(\alpha - k \ln(10)) (\beta + k \ln(10))}
$$

where $\alpha$ and $\beta$ represent possibly asymmetric slopes on both sides of the mean. For the symmetric case, use $\alpha = \beta = 1/b$, leading to:

$$
E[10^{k t}] = 10^{k\mu} \frac{1}{1 - (k b \ln(10))^2}
$$

The parameter $b$ relates to the standard deviation of a Laplace distribution ($\hat{\sigma}$) as $b = \hat{\sigma}/\sqrt{2}$.

The second moment is:

$$
E[10^{2 t}] = 10^{2 \mu} \frac{1}{1 - (\hat{\sigma} \ln(10))^2/\sqrt{2}}
$$

From here, the variance $var[10^{L(\cdot)}] = E[10^{2 L(\cdot)}] - E^2[10^{L(\cdot)}]$ is:

$$
var[10^{L(\cdot)}] = 10^{2\mu} \left( \frac{1}{1 - 2 \hat{\sigma}} - \frac{4}{(4 - \hat{\sigma}^2)^2} \right)
$$

In the limit of small micro fluctuations:

$$
var[10^{L(\cdot)}] \approx 10^{2 \mu} \left( \hat{\sigma}^2 + \frac{13}{4} \hat{\sigma}^4 + \frac{15}{2} \hat{\sigma}^6 + o(\hat{\sigma}^8) \right)
$$