---
sidebar_position: 5
slug: /data-analysis
title: Data Analysis
description: An overview of datasets used for analyzing export values, patents, and business units across various regions and industries.
keywords: [datasets, exports, patents, business units, data analysis]
tags: [data, analysis, exports, patents, business]
---

## Data

The exercises in this paper can be applied to any dataset stored as a cross-section. The specific datasets used here are secondary to the methodologies discussed, but they are introduced in this section for context.

**Empirical Information Sources:**

- **Export Values:** Data on export values by country and product, with the matrix $X$ describing the export volume $s_{cp}$ of country $c$ and product $p$.
- **Patents:** Number of patents by country and technological category, where $X$ describes the number of patents $s_{cp}$ of region $c$ and technology $p$. The location quotient is referred to as the index of Revealed Technological Advantage in this context.
- **Business Units:** Number of business units by US metropolitan statistical area (MSA) and industry (4-digit NAICS), denoted as $s_{cp}$, with marginal totals $S_c$ and $S_p$.

### Export Data

Empirical information on export flows (in US\$) includes 235 'country' categories and 1244 HS02, 4-digit 'product' categories, spanning 12 years from 2003 to 2014, resulting in over 1.7 million non-zero entries. This data is sourced from UN COMTRADE and is available through the Atlas of Economic Complexity.

### Patent Data

Patent information is sourced from the [OECD REGPAT](https://stats.oecd.org/oecdstat_metadata/showmetadata.ashx?dataset=pats_region) database, which collects records from the European Patent Office (EPO) and the Patent Cooperation Treaty (PCT) from 1978 to 2015. Patents are aggregated at 639 first-level subnational units ('regions') and across 124 technological classes ('technologies'), totaling 480 thousand observations.

### Business Data

Business counts are sourced from the County Business Patterns (CBP) data provided by the US Census Bureau and are [openly available](https://www.census.gov/programs-surveys/cbp/data/datasets.html). The data spans from 2002 to 2007, covering 369 unique US MSAs and 310 4-digit NAICS industries. Although the number of employees could be used as a variable, it is avoided due to dataset privacy procedures censoring this information.

For clarity and to avoid redundancy, not all exercises are shown for all datasets. When omitted, outcomes should be considered analogous.

**Note:** Some approaches presented here build upon previous works, benefiting from improved data quality that allows for more definitive results. Data of similar quality was not available in earlier studies by Hidalgo (2007) and Lorefice (2014).
