---
sidebar_position: 11
slug: /possible-sets-of-categories
title: The Possible Sets of Categories and Data Transformations
description: Explore the categorization and transformation of empirical data, focusing on the implications of different methods on study outcomes.
keywords: [data categorization, data transformation, empirical data, logarithmic transformation, location quotient]
tags: [data analysis, empirical research, data transformation]
---

## The Possible Sets of Categories

In this section, we delve into the categorization of empirical data, focusing on how different sets of categories can impact the analysis. 

- **Main Categorization**: We refer to the columns as the *main* categorization.
- **Side Categorization**: The rows are termed as the *side* categorization.

This distinction is crucial as covariance and other similarities are defined for pairs of main variables based on their values across side variables.

### Classification and Aggregation

When dealing with empirical data, classifications such as political entities, time periods, industries, and more are often used. These classifications can have multiple levels of aggregation:

- **Hierarchical Levels**: Often, these are hierarchical but not necessarily so.
- **Disaggregation**: Higher levels of disaggregation can detect specific phenomena but may increase noise due to sparsely populated categories.

In our work, we use counts of formal employment classified by administrative regions (US counties) and industry (NAICS).

## Transformations of the Observed Data

Data transformations are a common practice that significantly influences study outcomes, yet they often receive insufficient attention. The most frequent transformations include:

- **Logarithmic Transformation**: This helps achieve a more natural distribution of matrix values. For instance, nominal monetary values or population counts often benefit from this transformation.
- **Location Quotient (LQ)**: Also known as 'Revealed Comparative Advantage' (RCA) in international trade, this involves dividing matrix entries by partial margins, comparing observed values to those expected if marginal distributions were independent. It is advisable to use the log of the location quotient if the raw data is well-distributed in logs.
- **Binarization**: Often applied after computing LQ, this transforms matrix elements into a boolean (0, 1), indicating where a variable exceeds a threshold. This is useful when the interest is in the occurrence rather than the extent of an event.

### Reflection on Data Transformations

A deeper reflection on data transformations is crucial, as discussed by Kemeny (2014) and Fracasso (2017). There is a special distinction between:

- **Absolute Measures**: These are crucial for computing externalities and are often the starting point in studies.
- **Relative Measures**: Such as shares or location quotients, which may lead to outcomes losing touch with the true phenomena.

Rosenthal (2004) discusses the importance of absolute measures in understanding economic phenomena.

## Units of Measurement

The choice of units of measurement can significantly impact the analysis:

- **Consistency**: When data are consistent in units (e.g., values in USD), mathematical tools can be applied more effectively.
- **Mixing Variables**: Combining different variable types in a single matrix can cause issues during transformations, especially if units vary widely (e.g., population numbers vs. values in [0, 1]).

## Unifying a Whole Family of Discrete Coexistence Measures

In this section, we aim to unify various discrete coexistence measures to improve the robustness of studies. Differences in measures can lead to variations in results, making it challenging to discern whether these are due to data processing choices or actual differences in evidence.

- **Comparison of Measures**: We compare cooccurrence measures, even when applied to differently pre-processed data. This comparison is crucial for unifying techniques across studies, enhancing the comparability and robustness of results.

By understanding the similarities and differences among these measures, we can achieve a more comprehensive and robust collection of related studies.