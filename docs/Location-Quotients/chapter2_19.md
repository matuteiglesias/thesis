---
sidebar_position: 19
slug: conclusion-location-quotients
title: Conclusion on Location Quotients
description: A detailed analysis of location quotients, addressing size distortions and proposing a formal framework for measurement and comparison.
keywords: [location quotients, size distortions, empirical analysis, probabilistic LQ, log transformation]
tags: [location-quotients, empirical-analysis, size-distortions]
---

## Conclusion

In empirical contexts where a total can be disaggregated by two independent sets of categories $(c, p)$, the **location quotient (LQ)** serves as an intuitive transformation of raw data. It compares the observed magnitudes ($s_{cp}$) to the expectation from independent marginal probabilities of its categories ($S_c/S_w, S_p/S_w$). However, the resulting values do not belong to a metric consistent across entities. This inconsistency arises because the values are more likely to be spread out when smaller entities are involved, leading to **size distortions** in the Location Quotients. While these distortions have been acknowledged, they have not been systematically measured.

This work proposes using the observed probabilities that $LQ_{t+1} > 1$, conditional on the observation at time $t$: ($\log(s_{cpt})$, $\log(S_c S_p / S_W)$) as effective measures of the distance of $LQ_t$ to the $LQ = 1$ threshold. By computing these probabilities conditional on the problem's coordinates, we can measure the true nature of size distortions.

I confirm that the milder volatility of larger observed values and larger entities' sizes over time explains the milder volatility of LQ values, effectively narrowing the metric with increasing sizes. This finding is valid across many empirical systems where location quotients are typically used.

To estimate the probabilistic LQ (pLQ), I offer two alternative methods: 
- Fitting a **k-nearest neighbors model**.
- Using estimations of the growth rates of $\log(s)$ and $\log(S_c S_p / S_W)$.

The first method is recommended for estimating level curves of pLQ and transforming them into categorical levels. The second method provides a feasible explanation for the patterns observed in the level curves of pLQ.

This paper offers a path for determining level curves of LQ that acknowledge size distortions. The LQ values, which were previously incomparable across entities, can now be related to categorical intensities that account for the distortion from entities' sizes. Studies that used location quotients as dependent or independent variables can be revised accordingly.

I demonstrate the appropriateness of working with log levels of location quotients, defined as the difference between the log of observations ($x_1 = \log(s_{cp})$) and the log of the uncorrelated margins expectation level ($x_2 = \log(S_{p} S_c / S_w)$). These two variables can describe any possible configuration for an LQ observation. This formal framework for describing $\log(LQ)$ in a two-dimensional plane is useful not only for addressing size distortions but also for exploring other questions, such as the role of sparseness or evaluating distributions of LQ values and the suitability of possible normalizations. Readers are encouraged to leverage this formal framework for studying custom inquiries beyond the control of size distortions.

## Acknowledgements

The author wishes to acknowledge the invaluable advice and support from Profs. Federico Tamagni and Frank Neffke.