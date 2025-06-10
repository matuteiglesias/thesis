---
sidebar_position: 29
slug: /expected-level-parts-time-series
title: Expected Level of Parts' Time Series
description: Analyzing the expected level of parts' time series and its volatility, focusing on the narrow quantile condition and distribution assumptions.
keywords: [expected value, variance, narrow quantile, distribution, log-normal, log-Laplace]
tags: [time series, statistical analysis, distribution]
---

The strategy is to first determine the expected value of the ratio in **Equation power_sum_size**. This will simplify the characterization of its volatility. The variance of this ratio is approximately proportional to the variance of the log levels by a factor $\ln^2(10) \approx 5.30$ (see **Section 5.5**).

## Expected Level of Parts' Time Series

To proceed, note that from **Equation power_sum_size**, if the total is split into enough ($Q$) parts, all agents in each $q$ are approximately the same size $s_q$. This is known as the *narrow quantile* condition. In this limit, **Equation power_sum_size** becomes:

$$
\frac{S_{qt}}{S^0_q}=\frac{\sum\limits_i^{n_q} s^0_q 10^{ D(\cdot;\ n_q)}} {n_q  s^0_q} = \frac{1}{n_q } {\sum\limits_i^{n_q}  10^{ D(\cdot;\ n_q)} } \equiv \tilde M _t
$$

where $D(\cdot;  n_q)$ denotes a draw of $n_q$ elements from the distribution $D(\cdot)$. The sum represents a sum of all $n_q$ elements of this draw. Here, $\tilde M_t$ is introduced as an estimator of the mean of $10^{D(.)}$ computed from the $n_q$ values in $10^{D(.; n_q)}$.

A key idea to consider is that the value of the quantile, represented by $\tilde M_t$, can be assumed to have been drawn from an underlying distribution called $s^*_D$. This distribution is assumed to have a 'true' mean value $M$, for which $\tilde M_t$ is an estimator, and a variance $\Sigma^2$. Beyond this, we do not know much about $s^*_D$; it does not need to be normally distributed or have a closed form expression.

The first moment of $s^*_D$ ($M \equiv E[s^*]$) serves as a proxy for the levels ${S_{qt}}/{S^0_q}$ shown by quantile $q$. To determine $M$, we need to consider the limit:

$$
M= \lim_{n\to\infty} \left(  \frac{1}{n} {\sum\limits_i^{n}  10^{ D(\cdot;\ n)} }  \right) =   \frac{1}{n} \int n \ p(t) 10^t dt = \int \ p(t) 10^t dt   \equiv E [10^{D(.)}] 
$$

where $p(t)$ is the probability density function of the distribution $D(.)$. This is equivalent to: $\lim_{n\to\infty} \left(  {\sum\limits_i^{n} p_i 10^{ D(\cdot;\ n)} }  \right)  =   \int \ p(t) 10^t dt$. This suggests that $s^{*_q}$ may be expressed as $s^{*_q} = 10^{D(\cdot)}$ for some $D(\cdot)$. If firm-level fluctuations are small enough, the underlying distribution $s^{*_q}$ is approximately lognormal.

Keep in mind that the expressions in **Equation expectation_10t** are a large $n$ limit. The observed $\tilde M_t$ should converge to these levels progressively as $n_q$ increases. Mandelbrot comments, *"The population moments of a lognormal or approximate lognormal will eventually be approached, but how rapidly? The answer is: 'slowly'."* This convergence can be evaluated graphically in **Figure Elog_mu0_fnq_0**, (equivalent to Figure E9-2, op. cit.). Before discussing the convergence patterns in **Figure Elog_mu0_fnq_0**, let us introduce some formal tools.

Although there may not be closed form expressions for the fluctuations $D(\cdot)$, these tent shapes (see **Figure fl_dist**) can naturally be expressed as mixtures of possibly asymmetric log-normal, log-Laplace, or even fatter tail distributions. The log-normal and log-Laplace distributions will be used as clear benchmarks for other more general log-distributions that may appear empirically and for which we do not have an expression. In all experiments, the empirical distribution of micro shocks shows results with features between the log-Laplace and log-normal functions, thus justifying this choice. The conventions for defining the log-normal and log-Laplace distributions are in the Appendix. They are defined such that the theoretical standard deviation of log shocks matches the parameter $\hat \sigma$.