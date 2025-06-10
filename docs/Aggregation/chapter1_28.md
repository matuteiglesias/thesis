---
sidebar_position: 28
slug: /mandelbrot-sensitivity-size-distributions
title: Mandelbrot and Sensitivity in Size Distributions
description: Explore Mandelbrot's insights on the sensitivity of size distributions, particularly focusing on the lognormal distribution and its implications.
keywords: [Mandelbrot, sensitivity, size distributions, lognormal distribution, moments, Gaussian]
tags: [mathematics, statistics, distributions]
---

**Mandelbrot's Insights on Sensitivity in Size Distributions**

Mandelbrot highlighted the **sensitivity** of size distributions, particularly emphasizing the moments (such as mean and variance) of the lognormal distribution. He argued that these moments are extremely sensitive to the precise parameters of the lognormal distribution. This sensitivity implies that relying on the moments of the lognormal distribution might not be beneficial.

### Major Drawbacks of Lognormal Moments

**Section 2** demonstrates that the population moments of the lognormal distribution are not robust to small deviations from perfect lognormality. This lack of robustness means that even if a variable $X$ is approximately Gaussian, it is insufficient for the population moments of $\exp(X)$. The known simple values of $E[A^q]$ are disrupted by seemingly minor deviations. This phenomenon is technically referred to as the **"localization of the moments."** Therefore, unless lognormality is verified with absolute precision, the values of the moments become effectively arbitrary.

### Skewness and Sample Size Implications

When the lognormal variable $A$ is highly skewed and the sample size increases, the sequential sample average experiences significant fluctuations. It does not converge to the expected value until an impractically long period, corresponding to an asymptotically vanishing concentration. In the **middle-run**, the sample and population averages are largely unrelated, and the formulas for the scatter of the sequential sample moments of the lognormal distribution become exceedingly complex and practically useless.

This behavior is best illustrated graphically, with **Figure 2** using simulated lognormal random variables and **Figure 3** utilizing real data. These figures are integral to understanding the described phenomena.

**Note:** The figures mentioned are crucial for a comprehensive understanding of the behavior discussed in this section.