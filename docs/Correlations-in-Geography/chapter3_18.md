---
sidebar_position: 18
slug: /solution-cross-industry-overlap
title: Solution for Cross Industry Overlap
description: Explore the spatial coexistence of industries using computational experiments to address challenges in continuous space modeling.
keywords: [spatial coexistence, cross industry overlap, computational experiments, density functions]
tags: [spatial analysis, industry overlap, computational modeling]
---

## Solution for Cross Industry Overlap

To generalize the results from the previous section to spatial coexistence between a pair of industries, we must consider both continuous and discrete accounts. This involves using an expression valid for any establishment distance $\Delta$, such as the one described by Eq. GaussProd, rather than the simplified equation valid when $\Delta = 0$.

### Challenges in Continuous Space

Expressing the coexistence of establishments from two industries in continuous space presents significant challenges:

- **Volume Calculation**: The volume under the product of two bell-shaped density functions often lacks a closed-form expression. This complexity arises even with radial exponential decay.
- **Intersection Area**: Calculating the area of intersection between two circles is not straightforward, necessitating numerical integration.

### Computational Experiment Setup

In the computational experiments outlined below, we use square, equal-sized areas to maintain consistency and eliminate irregularities in area shapes. This approach is particularly relevant given that the majority of US counties are similarly sized. The vast majority of US counties in the contiguous US states are of similar size, making this procedure reasonable. Results might not apply if administrative areas are of extremely different sizes.

### Estimating Joint Probabilities

Even with approximate expressions for joint probabilities at any $\Delta$ and assuming square, fixed-size areas, further analytical challenges arise:

- **Pairwise Distances**: Each pair of 'overlapping' establishments $(i, j \in A, B)$ requires consideration of their own separating distance $\Delta_{ij}$. In our experiments, all separations $\Delta$ are uniform, allowing us to estimate the dependence on $\Delta$ under this assumption. In real-world scenarios, an effective $\Delta$ would represent the average distance between overlapping pairs.
- **Relative Locations**: Whether establishments are in the same area depends on the relative location of establishment $i$ within its area and the magnitude and angle of distance to establishment $j$. This can only be treated analytically on probabilistic grounds.

### Experiment Procedure

The best approach for comparing discrete area vs. continuous accounts is through computational experiments. The procedure involves:

1. **Defining Areas**: Create hypothetical administrative areas using a square grid.
2. **Loading Data**: Load the actual spatial distribution of establishments for an industry.
3. **Generating Copies**: Generate copies of this distribution, shifting all establishment positions by a distance $\Delta$ in random angles.
4. **Computing Cooccurrence**: Calculate discrete cooccurrence (cosine similarity) and numerically integrate the product of continuous density functions between the original data and each copy.

Through this method, we estimate expected discrete and continuous cooccurrence as a function of $\Delta$ and various administrative area sizes. This enables the study of the continuous/discrete correspondence as suggested in preceding sections, based on the problem's parameters.