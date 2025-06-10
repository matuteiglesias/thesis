---
sidebar_position: 1
slug: /abstract-location-quotients
title: Understanding Location Quotients and Their Distortions
description: Explore the intricacies of location quotients, their transformation from raw data, and the impact of size distortions on their interpretation.
keywords: [Location Quotients, LQ, Revealed Comparative Advantage, International Trade, Size Distortions]
tags: [Data Analysis, Economics, Quantitative Research]
---


## Abstract

**Location quotients (LQ)** are a transformation of raw data stored in contingency tables. They are computed by taking the ratio between the share of values in the table and the product of row-wise and column-wise margins. This results in a comparison between observed values and uncorrelated margins expectation.

This transformation is frequently used in studies involving international trade, often referred to as *revealed comparative advantage*, and in various other contexts where data can be disaggregated under at least two independent criteria, such as employment by industry and city.

It is known that the spread of LQ values is influenced by row, column, and table totals. This influence complicates the safe comparison of LQ levels across entities, over time, or between datasets. There is no universal metric by which an LQ value can be deemed low or high.

This issue significantly undermines the usefulness of the location quotient transformation. Although it has been noticed, it has not been thoroughly or systematically studied.

In this paper, I offer viable paths for characterizing these so-called **size distortions** in location quotients. I propose using the probability of an observation showing $LQ > 1$ in the following time step as a measure of effective distance to the $LQ = 1$ level. I measure these probabilities conditional on the magnitudes that make up an observed LQ: the size of the observed value ($x_1$) and the size of the expectation from uncorrelated marginal distributions ($x_2$). This approach allows for a clean, organized, and robust characterization of size distortions in LQ values.

I identify $LQ_t$ as the curves on the ($x_1$, $x_2$) plane where observations are equally likely to show $LQ_{t+1} > 1$. Additionally, we can observe how a fixed level of LQ implies higher chances that $LQ_{t+1} > 1$ in smaller entities compared to larger ones. With these tools, distortions in the LQ metric as a function of the sizes of raw values and entities can finally be tracked and characterized.