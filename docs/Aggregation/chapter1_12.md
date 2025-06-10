---
sidebar_position: 12
slug: /data-and-methods-2
title: Data and Methods
description: An exploration of the data and methods used in analyzing French trade, focusing on the PHID dataset and formal relations in sales time series.
keywords: [French trade, PHID dataset, sales time series, empirical evidence, computational experiments]
tags: [Data Analysis, Methods, French Trade, PHID]
---

## Data and Methods

In this section, we delve into the **data** and **methods** used in our analysis of French trade. We focus on the PHID (PHarmaceutical Industry Database), a unique dataset that allows us to study the impact of product characteristics on firm size and growth.

### Data

Aggregate figures of international trade are composed of export and import transactions by a large population of firms, excluding consumer purchases. Our primary source is the **French customs records**, which have been extensively used in recent international trade studies. For detailed documentation, refer to Bergounhon et al. (2018). This dataset covers all transactions involving a French exporter or importer from 1997 to 2013 on a monthly basis. However, since most volatility is of annual or lower frequency (see Appendix, **Section: Frequency**), we use the annual time series to reduce computational burden.

**Important Considerations:**

- Before 2010, transactions below 1000 EUR were not reported. To avoid distortions from the 2011 rule change, we exclude all transactions below this threshold throughout the dataset.
- Belgium and Luxembourg were recorded under a single country code before 1999. For consistency, they are treated as a single country in the dataset.

Between 1997 and 2013, **114,000** firms reported sales of approximately **8,970** products (CN 8 digits) to **442,000** buyers across **234** destinations. Despite this diversity, only **5,233** firms account for 90% of the exported value, similar to **1,845** products or **11,869** buyers or **42** partner countries. This high concentration is a known characteristic of international trade.

On the import side, **9,159** firms account for 90% of the traded value, with **2,107** products or **36** partner countries. Detailed customs records have only recently become available, adding novelty to this study's outcomes.

Results from export data are largely equivalent to those from import data. If only one flow direction's results are shown, assume the opposite flow yields similar outcomes.

### Methods

This study aims to determine the formal relations between the micro characteristics of sales time series of a large agent population and the moments of the aggregate sales time series. While this could be achieved analytically, empirical evidence is crucial for constraining our formal path.

**Key Methodological Approaches:**

- **Empirical Validation:** Every formal step is validated using empirical data from French traders. This helps assess the validity of key conditions and equations.
- **Computational Experiments:** Some formal developments are complemented with computational experiments. For instance, we draw random vectors $\bm x$ and study the average of $10^{\bm x}$ as a function of various parameters. This approach simplifies complex problems by constraining parameter ranges based on empirical conditions.
- **Counterfactual Studies:** We analyze multiple counterfactuals using firm-level sales time series. For example, we sample increasing numbers of firms to measure aggregate moments as a function of population size or assess changes due to entry and exit events.

These exercises are most effective when guided by a formal framework that directs how each experiment is conducted and identifies specific mechanisms for measurement. Thus, this paper combines empirical benchmarks from French traders with analytical and computational exercises.

The codes for reproducing computational results are available in the dedicated [GitHub repository](https://github.com/matuteiglesias/French_exports_bkp). Pseudo codes for all experiments are in the Appendix (**Section: Codes**).