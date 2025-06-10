---
sidebar_position: 6
slug: focus-paper-areas-side-categories
title: "Focus of This Paper: Areas as Side Categories"
description: Explore the implications of using geographical units as side categories in spatial analysis, examining various methodologies and challenges.
keywords: [geographical units, spatial analysis, cooccurrence techniques, regional economics, MAUP]
tags: [geography, spatial analysis, regional economics, methodology]
---


## Focus of This Paper: Areas as Side Categories

The focus of this paper is on the specificities derived from having **geographical units** as one side of the cross-section. In such a setting, cooccurrence techniques must be related to other techniques of spatial analysis. This connection has, however, not been formally addressed to the best of our knowledge.

**Locational linkages** among industrial activities are inferred from Pearson correlations of employment disaggregated by (4 digit) SIC industry categories and US State, as seen in works by Porter (2003) and Diodato (2018).

Another index of industry-to-industry coagglomeration is proposed by Ellison (1999). It is defined as the covariance of employment shares (normalized by one minus a Herfindahl index). If we work at a single level of disaggregation, this last normalization does not play a role. In practical cases, it will be very close to one. A simplified version of the index would then be taking just the covariance of employment shares. This index is "similar in spirit" to the Pearson correlations that Porter uses. The shares covariance of Ellison (1999) are unfortunately hard to match analytically with the similarity measures computed on absolute values. This is why they are excluded from the analysis of this paper, even if they would be worth including in follow-up studies.

Many papers have countries as side categories, such as those by Hausmann (2007) and Hidalgo (2007). Even if these are geographical areas, one should acknowledge that they are relatively few units with disparate sizes of about 4 orders of magnitude between extremes in terms of surface area, population, or gross product. Instead, if we take a single country or region and split it into a large enough number of small areas of about the same size, we are closer to bridging point-based pictures to small comparable areas arranged in a kind of lattice, to larger regions that contain a bunch of these areas.

For example, we will first apply our analysis on the contiguous United States of America, split into nearly 3200 counties of about $(40 \text{ km})^2$ average size. They offer some of the few cases of a large region split into uniform small areas of comparable size (even with a few exceptions), in addition to good quality data, strong and varied economic activities throughout the country, and compiled quite harmonically in central agencies. Successful tests on US counties would be a first step before applying the methods on evidence from other parts of the world. This analysis is thus a substantial improvement over the very coarse picture one can get from the 50 states as in Porter (2003). Smaller geographical units allow finer resolution of spatial patterns.

The issue of how to interpret a high correlation of spatial distribution is usually not addressed formally. Multiple reasons can lead to such observation. This issue is, of course, not simple to approach, but it is nevertheless needed before outcomes of studies can be safely interpreted and thus occupies a good deal of attention in this paper.

Finally, a promising alternative approach to pairwise similarities of industries based on their distribution over areas has been put forward by van Dam (2020), who introduces the use of pointwise mutual information. This index has reasonable foundations, and understanding its exact relation to the rest of correlation measures may be a useful exercise. This, however, would demand a dedicated study that we have to leave for the future.

Much of the information on regional economics has administrative areas as the basic unit of analysis. An issue that has been discussed is the effects of arbitrariness in administrative divisions' size and shape. The fact that firms can be on the border of an area and show no co-location with firms just across the border, while they would co-locate with distant firms within the same district, may influence the results. This issue has been acknowledged for long, often as the **Modifiable Unit Area Problem (MAUP)**. See for example Menon (2009) and Hennerdal (2017) for review and further discussion.

Even if the arbitrariness of administrative borders is a factor that will unavoidably alter results, if there is only one version of the underlying facts, then continuous and discrete measures of it should not contradict each other. That is, on average, two points *close* to each other are likely to lie in the same area, and two points *far* from each other are likely to lie in different areas. Irregularities of areas would introduce a certain distortion, but it cannot mess up with this principle completely.

The idea of having *solutions* to the MAUP is, for example, discussed in Dark (2007). Some works, such as those by Duranton (2005) and Scholl (2016), present it as a reason for choosing point-based measures instead of areal measures. Instead, I would like us to see they can all be interpretations of a single observation of a given spatial pattern. This will be developed in **Section: Continuous Methods** where we will probe the formal connection between areal and point data, offering a solution to the MAUP in studies of co-location (see [Section: Continuous Methods](./continuous-methods.md)).