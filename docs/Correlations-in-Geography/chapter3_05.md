---
sidebar_position: 5
slug: /related-works
title: Related Works
description: An exploration of similarity measures in various fields, highlighting their applications and impacts across disciplines.
keywords: [similarity measures, economic geography, scientometrics, correlation structures]
tags: [academic research, similarity analysis, interdisciplinarity]
---

## Related Works

In this section, we delve into the **use of similarity measures** across various academic fields, focusing on their applications and impacts.

### The Use of Similarity Measures

**Inner Products and Cooccurrence**: Inner products such as $X^T X$ are fundamental measures of joint cooccurrence. The elements of this matrix are given by $(X^T X)_{ii'} = \sum x_{ij} \cdot x_{i'j}$. Studies employing this framework can be traced back to applications outside Economic Geography. For instance, in the realm of patents, a cosine similarity between vectors of firm patents by technological categories was termed "proximity" and used to weight investments in related firms (Jaffe, 1986). Similar measures have been applied to patent data in other works like Engelsman (1994) and Breschi (2003). Such similarity measures, including co-authorship and joint thematic classification, are prevalent in scientometric research (cf. Eck, 2009).

**Recent Developments**: More recent studies have revitalized the approach, such as Hausmann (2007) and Hidalgo (2007), where a minimum conditional probability is referred to as 'proximity' ($\phi$). This is expressed as $\phi_{ii'} = \sum x_{ij} \cdot x_{i'j} / \max(\Sigma x_{ij}, \Sigma x_{i'j})$, applied on a transformed matrix of exports by country.

These contributions highlight that a network structure derived from similarity measures provides a quantitative tool to estimate how industry or technology categories relate to each other. This has been beneficial in Economic Geography, particularly in studying labor capabilities (Neffke, 2011), knowledge diffusion, and technological evolution (Boschma, 2014; Balland, 2015). It aids in mapping technological landscapes (Triulzi, 2017) and productive capabilities (Hausmann, 2016), among other applications.

**Table of Works Utilizing Similarity Analysis**:

Below is a table summarizing various works that have applied similarity analysis, highlighting the unique and common features of each:

| **Reference** | **Variable (unit)** | **Transform.** | **Main Category** | **Side Category** | **Proximity Measure** |
|---------------|---------------------|----------------|-------------------|------------------|-----------------------|
| Jaffe (1986) | Patents |  | Firms | Technological fields | Cosine |
| Teece (1994) | Ownership of plants in industries |  | Firms | Industries |  |
| Porter (2003) | Employment (\#) |  | Industries | US states | Pearson corr |
| Engelsman (1994), Breschi (2003) | Patents (\#) |  | Patent Id | Technological fields | $X^{T}X$, cosine |
| Zhang (2005) | Gene Expression |  | Gene | Locus | Pearson corr |
| Porter (2005) | Vote (nay = -1, yea = +1, else = 0) |  | Roll-call votes | Representatives | $X^{T}X$, $XX^{T}$ |
| Hausmann (2007), Hidalgo (2007, 2009), Tacchella (2012) | Exports (USD) | LQ \textgreater 1 | Product (HS / SIC) | Country | Min cond. Prob. (proximity) |
| Wang (2009) | Mean daily temperature |  | Chinese cities | Time periods |  |
| Coscia (2012) | Joint appearance in online documents ('hits') (\#) |  | Countries | Organizations | Issues (keywords) | LQ \textgreater 1 of hits |
| Boschma (2012) | Exports (USD) | LQ \textgreater 1 | Product (HS / SIC) | Spanish region (NUTS 3) | Min cond. Prob. (proximity) |
| Boschma (2014), Santoalha (2020) | Patents (\#) | LQ \textgreater 1 | Firms | Technological fields | Min cond. Prob. (proximity) |
| Hausmann (2016) | Labor flow (\#) | (LQ - 1) / (LQ + 1) | Industry | Industry |  |
| Petralia (2017) | Patents (\#) | LQ \textgreater 1 | Country | Technological fields | Cosine |
| Iglesias (*) | Employment, Firms (\#) | No transformation, log, $LQ > 1$ | Industries (NAICS) | Counties | Pearson corr, cosine, cov, $X^{T}X$, min cond. Prob. (proximity) |

**Beyond Economic Geography**: Similarity measures are also prevalent outside geography. For instance, in financial analysis of time series, cross-correlations have been extensively studied (Plerou, 1999). These matrices are expressed as the sum of a 'modal' matrix, a group structure matrix, and a noise matrix, derived from the eigenvalues and eigenvectors of the empirical correlation matrix. This approach is beneficial for community detection in correlation structures (MacMahon, 2015).

In genomics, gene expression data is often displayed in rectangular matrices, with columns representing genes and rows indicating expression levels under various conditions (Wang, 2014). A squared similarity matrix is typically constructed, with research delving into the implications of this analysis (Zhang, 2005).

Economic Geography could benefit from recognizing the mathematical identity of indices used in similarity measures, borrowing from technical developments in other disciplines. This would enhance the comparability of results within the field.