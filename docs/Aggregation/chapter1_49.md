---
sidebar_position: 49
slug: /appendix-uncertainty-off-diagonal-elements
title: "Appendix I: Uncertainty Introduced by Off-Diagonal Elements"
description: Explore the uncertainty in aggregate variance estimation due to off-diagonal elements and cross covariance terms.
keywords: [uncertainty, aggregate variance, cross covariance, off-diagonal elements]
tags: [variance, covariance, uncertainty, aggregate variance]
---


# Appendix I: Uncertainty Introduced by Off-Diagonal Elements

In this section, we delve into the **uncertainty** introduced by off-diagonal elements when estimating aggregate variance. This uncertainty arises from the contributions of cross covariance terms, which, although expected to be null, are never actually so.

Assume we have estimated the variance $\sigma^2_i$ for each group of agents $i$. If we also have information on aggregate shocks, we can derive aggregate variance using specific equations. However, these derivations assume uncorrelated cross terms, which is not the case in actual settings (see **Figure: Components Cross Covariance** and **Figure: Parts Cross Covariance**).

## Estimating Uncertainty

To estimate the uncertainty in aggregate variance, we consider the typical magnitudes of contributions introduced by cross covariance terms. These contributions are expressed in terms of the fluctuations $\sigma_i$.

Starting from the idiosyncratic contributions to volatility, including cross covariances:

$$
\sigma^2_{parts} = \frac{1}{Q^2} \sum\limits_{q_i, q_j} \sigma_i \sigma_j \text{Cov}(\epsilon_{it}, \epsilon_{jt})
$$

Assume the $\sigma_i$ values are known. The uncertainty of $E[\sigma^2(\log(X))]$ arises from the terms $\text{cov}(\epsilon_{it}, \epsilon_{jt})$. For simplicity, let these off-diagonal values be random variables drawn from a uniform distribution $U(-1, 1)$. This allows us to estimate the uncertainty measure $\text{std}[\sigma^2(\log(X_t))]$.

## Expectation and Variance of $\sigma^2_{parts}$

The expectation and variance of $\sigma^2_{parts}$ can be derived by separating the diagonal terms and expressing the rest as double the upper- (or lower-) diagonal terms:

$$
\sigma^2_{parts} = \frac{1}{Q^2} \sum\limits_{q}^{Q} \sigma_q^{2} + \frac{2}{Q^2} \sum\limits_{i < j} \sigma_i \sigma_j \text{Cov}(\epsilon_{it}, \epsilon_{jt})
$$

Assuming $\text{Cov}(\epsilon_{it}, \epsilon_{jt}) \sim U(-1, 1)$, the expected value of the off-diagonal terms is zero, suggesting they could be dismissed. However, to estimate their importance, compute the variance:

$$
\text{var}[Y] = E[Y^2] - E[Y]^2 = E[Y^2]
$$

With $Y = \frac{2}{Q^2} \sum\limits_{i < j} \sigma_i \sigma_j U(-1, 1)$, we simplify to:

$$
E[Y^2] = \frac{4}{Q^4} E \left[ \left( \sum\limits_{i < j} \sigma_i \sigma_j U(-1, 1) \right)^2 \right]
$$

Using the notation $\sigma_{i}\sigma_{j} \equiv \sigma^2_{ij} \equiv \sigma_p$ and $U_{ij} \equiv U_p$, we expand:

$$
E[Y^2] = \frac{4}{Q^4} \frac{1}{3} \sum\limits_{p}^{Q(Q-1)/2} \sigma_{p}^{2}
$$

The term $U_{p}^{2}$, distributed over $[0, 1]$, has a mean value of $\frac{1}{3}$. Thus:

$$
\text{var}[Y] = E[Y^2] = \frac{4}{3 Q^4} \sum\limits_{i < j}^{Q(Q-1)/2} \sigma_{i}^{2}\sigma_{j}^{2}
$$

## Aggregate Volatility

Aggregate volatility's expected value and standard deviation are:

$$
E[\text{var}[\log(X_t)]] = \sigma^2_m + \frac{1}{Q^2} \sum\limits_{q}^{Q} \sigma_q^{2}
$$

$$
\text{std}[\text{var}[\log(X_t)]] = \frac{2}{Q^2} \sqrt{\frac{1}{3} \sum\limits_{i < j}^{Q(Q-1)/2} \sigma_{i}^{2}\sigma_{j}^{2} + \frac{1}{3} \sigma_{m}^{2} \sum\limits_{i}^{Q} \sigma_{i}^{2}}
$$

This provides an **estimate of the interval** where aggregate volatility is expected, based on the magnitude of cross covariance terms.