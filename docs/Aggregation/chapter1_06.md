---
sidebar_position: 6
slug: /related-works-2
title: Related Works
description: A review of approaches to explaining aggregate volatility in economics, contrasting regression-based methods with identity-based frameworks.
keywords: [aggregate volatility, economic models, regression analysis, business cycle, equilibrium models]
tags: [economics, volatility, regression, business cycle, equilibrium models]
---


## Related Works

In this section, we review various approaches to explaining **aggregate volatility** in economics.

Many papers in economics estimate the relevance of certain variables by employing regression analysis with diverse specifications (Stockman, 1988; Koren & Tenreyro, 2007; Canals, 2007; Foerster, 2011; Di Giovanni, 2014; Castro, 2015). While this can be useful for estimating the importance of certain factors, our work seeks to account for fluctuations based on the condition $X = \sum_i S_i$, which constrains how micro and macro fluctuations relate. This approach differs from using regressions to find "variables that can help explain" aggregate volatility. Some of the mathematical frameworks in this paper can still be applied in exercises involving factor models.

### General Equilibrium Models

The **business cycle tradition** in economics naturally lends itself to studying variance, which directly arises from the amplitude of wave components (see **Appendix**, Eq. freq_var). Impactful contributions, such as those by Long (1983) and Kydland (1982), proposed one-time step specifications in real business cycle logic, popularizing the study of volatility under the framework of **neoclassical equilibrium models**. Recent studies continue to explore volatility through new classical macroeconomic models (Di Giovanni, 2014; Carvalho, 2019).

However, this paper does not adopt economic models. Problems strictly related to aggregate volatility are independent of model characteristics. In fact, economic models can unnecessarily complicate our understanding of inherently mathematical situations, which are already non-trivial. Moreover, key model variables may not be well observable or unequivocally defined, resulting in significant gaps between theory and empirics[^1][^2]. This paper focuses on studying open problems present when aggregating agent sales, which fulfill $X = \sum_i S_i$ exactly. Many results extend to cases where we aggregate, e.g., production, although they precede the introduction of an "aggregation of production"[^3].

In models following Long (1983) and Kydland (1982), the time step perspective is akin to autoregressive model estimations (cf. Bollerslev, 1994, esp. S4). These models lend themselves to decompositions into the frequency domain (as in Dupor, 1999; Horvath, 1998) and are similar to the modern study of higher frequency financial time series (Jacod, 2012). A subtle but important departure in this paper is the description of fluctuations by deviation from a mean, as opposed to one-step time differences. This choice is optimal for aggregating micro fluctuations and should be adopted for easier, more solid results, even though an autoregressive framework is useful for studying other types of questions related to agents' dynamics.

[^1]: By involving production models, many papers deal with total factor productivity (TFP). However, it is known that measuring TFP is problematic and involves assumptions on labor, capital, and possibly other unspecified factors (cf. Felipe, 2003 for discussion).

[^2]: Some expressions for aggregate volatility are closely linked to analytical developments in the context of equilibrium models, with Baqaee (2018) being a closely related work.

[^3]: We use the term 'sales' to refer to the value of transactions between firms (or agents, including individuals), whether exports (French sellers to foreign buyers) or imports (French buyers from foreign sellers). We account for flows accumulated over time periods.