---
sidebar_position: 3
slug: /literature-review-lq
title: Literature Review on Location Quotient Transformations
description: An in-depth review of the literature on Location Quotient transformations, discussing their applications, limitations, and alternatives in various contexts.
keywords: [Location Quotient, LQ, Revealed Comparative Advantage, RCA, Logarithmic Transformation, Economic Geography]
tags: [Economics, Data Analysis, Trade Models, Location Quotient]
---


## Literature Review

**Location Quotient (LQ) transformations** have been a staple in various fields, notably in international trade since Balassa (1965) and industrial classifications since Florence (1939). More recent applications include patent counts (de Solla Price, 1981; Soete, 1983) and firm portfolios (Teece, 1994). Exercises by Hidalgo (2007, 2009) and Tacchella (2012) have revitalized LQ's use in Economic Geography, particularly in regional development and technological innovations (Balland, 2016).

### Three Approaches to Address Size Effects

1. **Normalization**: Using ratios to averages or z-scores, though this method has inherent problems.
2. **Alternative Indices**: These often "solve the problem" by sidestepping it.
3. **Probabilistic LQ**: This involves a two-dimensional normalization, unlike standard approaches that normalize data along rows or columns alone.

### Application and Criticism

LQ indices are applied in diverse contexts, such as patent data, exports data, and business counts data. However, some studies discourage LQ use, arguing it doesn't "reveal comparative advantage" as trade models suggest (Bowen, 1983; Leromain, 2014). Issues such as asymmetry and comparability across datasets are also raised (Liu, 2019).

### Alternative Indices

While some propose alternative expressions for 'comparative advantage' indices, these can be mathematically inconvenient. For instance, Cai (2008) and Hoen (2006) introduce complex transformations that may not be practical. Normalizations along one category set leave size effects uncontrolled (O'Donoghue, 2004; Zheng, 2013).

### Logarithmic Transformation

In empirical economics, size distributions often follow a lognormal or power law (Pareto) distribution (Axtell, 2001). For example, export volumes and patent counts exhibit this pattern. If $\log(s_{cp})$, $\log(S_c)$, $\log(S_p)$ are near normally distributed, then $\log(LQ) = \log(s_{cp}) - \log(S_c) - \log(S_p) + \log(S_W)$ should also be near normally distributed:

$$\log(LQ_{cp}) = \log(s_{cp}) - \log\left( \frac{S_c S_p}{S_W} \right)$$

**Logarithmic LQ** is not a separate index but the same index in a different scale, emphasizing the gap between observed and expected levels (Kunimoto, 1977; Bowen, 1983; Vollrath, 1991).

### Challenges with LQ

**Linear Scale Problems**: Issues include the mean being far above 1 and sensitivity to extreme values (Hinloopen, 2001; Hoen, 2006). The distribution's skewness and asymmetry are also problematic (Laursen, 2015).

**Logarithmic Scale Benefits**: Log transformation offers a more symmetrical distribution, aligning with information theory conventions like pointwise mutual information (PMI).

### Addressing Null Entries

The primary obstacle in using $\log(LQ)$ is handling null entries in large datasets. While some dismiss log transformations due to this issue, ignoring or separately accounting for null values can mitigate the problem. Studies show that large agents dominate value concentration, suggesting minimal impact from small or null entries.

### Conclusion

Despite challenges, **logarithmic LQ** aligns with desirable index properties, such as stable mean and symmetry (Hoen, 2006). The use of log(LQ) is supported by its performance in trade models (Deb, 2015). Understanding and controlling for size effects is crucial for future research and can be leveraged for specific goals.