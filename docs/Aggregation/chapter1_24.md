---
sidebar_position: 24
slug: /log-aggregate-deviations
title: Log Aggregate Deviations and Sectoral Contributions
description: Explore how log aggregate deviations can be expressed as a linear combination of sectoral log deviations and the implications for aggregate variance.
keywords: [log aggregate deviations, sectoral log deviations, aggregate variance, covariance]
tags: [economics, variance, covariance, sectoral analysis]
---


**Understanding Log Aggregate Deviations**

If we can express log aggregate deviations as a linear combination of sectoral log deviations, then by the properties of aggregate variance, a specific relation will apply:

$$
\begin{equation}
\begin{split}
var(\log(X)) \approx  \sum_{i, j} \frac{\bar S_{i} \bar S_{j}}{\bar X^2}   cov(F_{it}, F_{jt})  =& \sum_{i, j} \frac{\bar S_{i} \bar S_{j}}{\bar X^2}  cov \left( \log \left(\frac{S_{i}}{\bar S_i}\right), \log \left( \frac{S_{j}}{\bar S_j} \right) \right) \\ =& \sum_{i, j} \frac{\bar S_{i} \bar S_{j}}{\bar X^2}  cov \left( \log(S_{i}), \log (S_{j}) \right)
\end{split}
\end{equation}
$$

Here, indices $i$ and $j$ represent sectors. Note that dividing by a fixed value $\bar S$ before taking the log does not change variance. This equation clarifies how small log fluctuations $F_t$ of parts of a total contribute to the variance of the log total, assuming these $F_t$ are small enough. This is the "log equivalent" of the linear sum of variance rule: $var[X] \equiv  \sum_{i, j \in P}  cov(S_i, S_j)$.

**Limitations for Individual Agents**

Shocks to individual agents can easily reach a magnitude of $\sigma_k \approx 0.5$ or larger. This implies that in a given year, a firm may sell a third (or three times) its value of average annual sales. Under these conditions, and even with milder shocks where $\sigma_k > 0.1$, expressions of aggregate variance like the one above are not valid. Using them can lead to incorrect results.

Despite this, the type of relation in the equation above is assumed at the firm level by Gabaix in his equation 3. However, there is no guarantee that the right-hand side of this equation represents aggregate idiosyncratic volatility because necessary conditions on $\epsilon_{it}$ are likely not met.

**Challenges with Nominal Shocks**

The fact that a linear relation does not apply for firms is not due to proposing $F_t$ log shocks and therefore $10^{F_t}$ nominal shocks. The issue lies in the distribution of the nominal shocks themselves. In real-world settings, if we state (as in Gabaix's equation 1) that $\Delta S_{it} = \sigma_i \epsilon_{it}$, we can assume $var(\epsilon_i) = 1$, but these $\epsilon_{it}$ will not be normally distributed. They will be highly asymmetric and not centered at zero, leading to unknown $cov(\epsilon_{it}, \epsilon_{jt})$. Most certainly, they will not be uncorrelated, so the approach in this paper has no guarantees of adapting to empirical realities.

**A Viable Path Forward**

Fortunately, log differences to stationary levels show distributions $D(\cdot)$ that can be worked with. Expressing firm-level shocks as $10^{D(\cdot)}$ is not just one of many conventions but the best open path for correctly accounting for micro shocks. Uniting $10^{D(\cdot)}$ micro shocks to aggregate volatility is viable, although not without difficulty. This path will be pursued in the section on **Aggregating a Group of Agents** (see [Section: Aggregating a Group of Agents](./aggregating-a-group-of-agents.md)).