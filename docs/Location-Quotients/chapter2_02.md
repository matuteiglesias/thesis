---
sidebar_position: 2
slug: /introduction-location-quotients
title: Introduction to Location Quotients
description: Explore the concept of location quotients in economic studies, their challenges, and potential solutions to size distortions.
keywords: [location quotients, economic studies, size distortions, empirical analysis]
tags: [economics, data analysis, location quotients]
---

## Introduction

Location quotients (LQ) are a transformation of cross-sectional data frequently used in various contexts in empirical economics. The LQ transformation gained prominence in studies involving international trade flows, notably after Balassa's introduction of the **revealed comparative advantage** index (RCA) *(Balassa, 1965)*. Beyond international trade, location quotients have been applied to measure economic intensity, such as employment or sales by place and industry, and the number of patents by place and technological field *(Florence, 1939; de Solla Price, 1981)*.

### Purpose and Challenges

The primary goal of the LQ transformation is to account for the size of entities when evaluating data magnitudes. For instance, a billion USD is significant for a small country but minor for larger countries. Thus, it is reasonable to weigh raw data by the size of the entities they belong to.

However, a critical issue with location quotients is that LQ values cannot be compared across entities, time periods, or datasets. There is no absolute measure of intensity or scale for LQ values due to the influence of entity size and table total on LQ value spread. Smaller entities tend to exhibit wider fluctuations in LQ levels, a phenomenon observed in business sales data *(Stanley, 1996)*. These effects, stemming from entity sizes and observations, are termed **size effects**.

### Notation and LQ Transformation

Let us define some useful notation. Typically, we have a total $S_W$ (e.g., world exports) disaggregated into at least two independent categories, **C** and **P** (e.g., countries, products). This notation applies to various empirical settings, like patent counts by country and technology class, or employment levels by city and industry. The value associated with entities $c \in C$ and $p \in P$ is denoted as $s_{cp}$, with all values being non-negative. The table total is $S_W = \sum_{cp} s_{cp}$. The entity sizes are $S_c = \sum_p s_{cp}$ and $S_p = \sum_c s_{cp}$. Applying the location quotient transformation to raw data $s_{cp}$ in a contingency table involves replacing entries $s_{cp}$ with:

$$
LQ_{cp} = \frac{s_{cp} S_W}{S_c S_p}
$$

When $LQ\_{cp} = 1$, the corresponding $s_{cp}$ value aligns with the expected distribution from independent marginal distributions $S_c$ and $S_p$. Also, $LQ\_{cp} = 0$ if and only if $s_{cp} = 0$. All other positive LQ values relate to this relation, but complete identification between $s_{cp}$ and marginal probabilities only occurs if $LQ = 1$. Thus, $LQ = 1$ is generally considered the only LQ level with a clear interpretation.

### Size Effects and Probabilistic LQ

Consider the magnitude of size effects on LQ. For instance, for observations where $LQ \approx 0.8$ in export data, the probability of shifting to $LQ > 1$ within a year is $23\%$ for values between $10^4$ USD and $10^5$ USD, $8.4\%$ for values between $10^6$ USD and $10^7$ USD, and $1.0\%$ for values between $10^8$ USD and $10^9$ USD. This indicates that a single LQ level implies a more optimistic scenario for small observations than large ones.

This paper leverages these patterns to measure size distortions. Correctly characterizing these distortions is crucial for reliable results using LQ indices.

### Solutions and Framework

A quick solution might involve taking z-scores within entities, as suggested by O'Donoghue and Zheng. However, deciding the scope of these z-scores—whether within rows, columns, across time, or combinations—is essential. Alternatively, some have tweaked the LQ expression or abandoned it for other indices.

What is needed is an organized understanding of size effects in location quotients and their measurement. Examining the width of LQ level jumps over time is useful, as the local width of these jumps relates to the local width of the LQ metric. When LQ varies widely, the chances of crossing the $LQ = 1$ threshold in any time step are larger for equal $LQ_0$ starting levels.

This paper proposes a formal framework using the difference between the log of observed values ($x_1$) and the log of expected values from uncorrelated margins ($x_2$), expressed as $\log(LQ) = x_1 - x_2$. This creates a two-dimensional space ($x_1$, $x_2$) for LQ observations from entities of different sizes. After describing empirical information, I present results from computing probabilities of surpassing the $LQ = 1$ threshold based on sizes $x_1$, $x_2$, termed **probabilistic LQ** or **pLQ**. This method reveals equivalent distances to the $LQ = 1$ level, addressing size distortion characterization.

### Conclusion and Structure

I test a model clarifying the relationship between size volatility and LQ volatility, translating these into jump distributions and estimating chances of surpassing the $LQ = 1$ threshold. This exercise formally closes the discussed elements.

Overall, this paper offers formal paths and practical solutions for robustly assessing location quotient issues. The tools presented enable new techniques, such as consistently defining LQ level categories for all entities, enriching studies using 'revealed comparative advantage' as a regression variable.

The following sections are organized as follows: **Section 2** reviews literature on location quotient indices, **Section 3** discusses the dataset, **Section 4** presents a mathematical framework for LQ indices, **Section 5** introduces the probabilistic LQ index, and **Section 6** offers models describing size effects. **Section 7** concludes.