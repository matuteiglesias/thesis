---
sidebar_position: 37
slug: /moments-log-quantile-levels
title: Moments of Log Quantile Levels
description: Explore the moments of log quantile levels, focusing on variance calculations for log-normal and log-Laplace fluctuations.
keywords: [log quantile levels, variance, log-normal, log-Laplace, fluctuations]
tags: [quantile, variance, log-normal, log-Laplace]
---

**Understanding Moments of Log Quantile Levels**

In this section, we delve into the **moments of log quantile levels**. We have been working with $\tilde M_t \equiv S_{qt}/S^0_q$, and there exists a hypothetical distribution $s^*_{D}$ from which these values are drawn. If we are interested in the $var[\log(S_{qt}/S^0_q)]$—which is equivalent to $var[\log(S_{qt})]$ since $S_q^0$ is a fixed level—as opposed to $var[S_{qt}/S_q^0]$ on the linear levels, we can use the relation:

$$
var[\log(\tilde M_t)] \approx \frac{var[\tilde M_t]}{\ln^2(10) E^2[\tilde M_t]}
$$

The variance of log levels is identified with $\sigma^2_q$ in previous sections, such as in equations related to linear approximations and variance of shocks.

### Log-Normal Fluctuations

For log-normal fluctuations, by substituting the expressions for expected value and variance into the equation above, we have:

$$
var[\log(\tilde M_t)] \approx \frac{var[S_{qt}/S^0_q]}{\ln^2(10) E^2[{S_{qt}}/{S^0_q}]} = 
n_q^{-\alpha} \frac{10^{2 \mu + \hat \sigma^2 \ln(10)} (10^{\hat \sigma^2 \ln(10)} - 1)}{\ln^2(10) 10^{2 \mu + \hat \sigma^2 \ln(10)}}
= n_q^{-\alpha} \frac{10^{\hat \sigma^2 \ln(10)} - 1}{\ln^2(10)}
$$

In the limit of small fluctuations, this simplifies to:

$$
var[\log(\tilde M_t)] \approx n_q^{-\alpha} \left(\hat \sigma^2 + \frac{1}{2} \hat \sigma^4 \ln^2(10) + o(\hat \sigma^6)\right)
$$

### Log-Laplace Fluctuations

Similarly, for log-Laplace fluctuations, using the variance-to-mean ratio and the expressions for the kth moment of a log-Laplace, we get:

$$
var[\log(\tilde M_t)] \approx \frac{var[S_{qt}/S^0_q]}{\ln^2(10) E^2[{S_{qt}}/{S^0_q}]} = 
\frac{n_q^{-\alpha}}{\ln^2(10)} \left(\frac{(1 - \frac{1}{2} \hat \sigma^2 \ln^2(10))^2}{1 - 2 \hat \sigma^2 \ln^2(10)} - 1\right)
$$

In the limit of small fluctuations, this becomes:

$$
var[\log(\tilde M_t)] \approx n_q^{-\alpha} \left(\hat \sigma^2 + \frac{9}{4} \hat \sigma^4 \ln^2(10) + \frac{9}{2} \hat \sigma^6 \ln^4(10) + o(\hat \sigma^8)\right)
$$

In both cases, the dependence for small fluctuations is primarily on $\hat \sigma^2$, but the nonlinear terms in the log-Laplace case are more than four times larger than those in the log-normal case.