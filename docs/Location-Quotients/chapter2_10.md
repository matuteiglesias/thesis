---
sidebar_position: 10
slug: location-quotient-probabilities
title: Probability Analysis of Location Quotients
description: An in-depth examination of location quotient probabilities, focusing on the conditional probabilities and log-level analysis.
keywords: [location quotient, probability, log-level, economic analysis]
tags: [location quotient, probability, economic analysis]
---


**Understanding Location Quotient Probabilities**

Recall from *Section: Analysis* that the location quotient (LQ) observations are fully determined by **two** independent variables. This compels us to compute the probabilities that an observation will be $LQ_{t+1} > 1$, conditional not only on $LQ_t$ but also on an additional independent coordinate simultaneously. Any pair of independent coordinates works, but here we choose to use $S_p S_c / S_W$ and $s_{cp}$.

### Definition of pLQ

The probability of the location quotient exceeding one in the next period, given the current conditions, is defined as:

$$
\begin{equation}
\begin{split}
 pLQ &= P(LQ_{t+1} > 1\ |\ (S_p S_c / S_W)_t, s_t)\\
      &= P(s_{t+1} > (S_p S_c / S_W)_{t+1}\ |\ (S_p S_c / S_W)_t, s_t)
\end{split}
\end{equation}
$$

The indices $cp$ have been omitted for clarity. In practice, it is more convenient to use the log levels, benefiting from the amenable characteristics of their distribution:

$$
\boxed{
\begin{equation}
\begin{split}
 pLQ &= P(\log(LQ)_{t+1} > 0\ |\ x_{2 ,t}, \log(s_t))\\
      &= P(\log(s)_{t+1} > x_{2, t+1}\ |\ x_{2, t}, \log(s_t))
\end{split}
\end{equation}
}
$$

where $x_2 = \log(S_p S_c / S_W)$ for brevity.

A precise characterization of this pLQ should be a baseline to study before introducing various external factors to explain $P(\log(LQ)_{t+1} > 0)$. This means discounting size effects before modeling the chances of $P(\log(LQ)_{t+1} > 0)$ as dependent on other variables. To the best of our knowledge, this line of reasoning has not been pursued elsewhere. Although such distortions have been partially acknowledged for a long time, they have not been measured satisfactorily. We offer a step towards understanding the effects that complicate the comparison of LQ across entities, time periods, and datasets.

### Interpretation of pLQ Level Curves

It is interesting to consider how we should interpret level curves of pLQ and how they compare to levels of LQ. For example, consider two countries that, for some product and year, show the same level of LQ (say $LQ_0 = 0.5$) but different levels of pLQ (such that we expect, say, 1% vs. 10% chances of surpassing the threshold in the next year). Are they equally distant from the $LQ > 1$ situation? Is it a desirable property for an index of comparative advantage to be independent of the size of the country (product, etc.) involved? If the answer is yes, then we would want to acknowledge effects of the type discussed here and be able to counter them.

In the next section (see **[Section: KNN Estimation](./knn_estimation.md)**), I offer a method for the estimation of pLQ, and in **Section: Model** I discuss numerical reconstructions of pLQ derived from models of the growth rates of $\log(s_{cp})$ and $\log(S_c S_p / S_W)$.