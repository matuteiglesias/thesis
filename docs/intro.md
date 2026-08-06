---
title: Research programme and thesis archive
sidebar_label: Research programme
sidebar_position: 1
slug: /intro
description: Present-day research programme and guided access to the thesis archive.
---

# Economics of Aggregation, Scale, and Measurement

This portal began as an accessible version of my doctoral thesis, *Essays in the Economics of Aggregation*. It now also serves as the research archive and intellectual foundation for a present-day programme on **aggregation, scale, and measurement**.

The common question is simple to state:

> **What economic object is created when heterogeneous micro-level quantities are weighted, normalized, grouped, or represented in space?**

That question appears in three settings developed across the thesis:

1. **Microeconomic fluctuations become aggregate volatility.**
2. **Economic tables become measures of specialization and revealed advantage.**
3. **Point locations become areas, correlation matrices, and industry-relatedness networks.**

The pages below preserve the full thesis trail: formal derivations, empirical exercises, simulations, figures, and technical appendices. The research programme above them is more selective. It identifies the claims that remain economically important, distinguishes current formulations from thesis-era interpretations, and turns the archive into a set of navigable research paths.

:::info Status and provenance
The portal distinguishes among **current manuscripts**, **peer-reviewed publications**, **working papers**, **thesis results**, **research directions**, and **technical or archival material**. A page may contain a valuable antecedent without representing an active paper or a current publication claim.
:::

## The unifying structure

Across the three essays, the measured economic object depends on both the underlying micro information and the rule used to aggregate it:

\[
\text{microeconomic information}
\;\longrightarrow\;
\text{aggregation or normalization rule}
\;\longrightarrow\;
\text{measured economic object}.
\]

The rule is not always a neutral final step.

- Weighting firms and shocks creates an aggregate variance–covariance exposure.
- Normalizing a contingency table creates an index whose distribution may depend on observation size.
- Grouping establishments into administrative areas creates a spatial support that shapes measured co-occurrence.

This is the intellectual link between the current aggregation agenda, the published work on location quotients, and the thesis programme on correlation structures in economic geography.

## Current programme

### Concentration Is Not Scaling

The active research front studies diversification and aggregate volatility.

For a weighted aggregate, direct concentration is

\[
H(N)=w(N)^\top w(N),
\]

while aggregate variance is

\[
V(N)=w(N)^\top\Sigma_\varepsilon(N)w(N).
\]

The first object is a property of direct economic weights. The second also depends on marginal shock variances, covariance, composition, and the population path indexed by \(N\).

The current manuscript, *Concentration Is Not Scaling: An Exact Decomposition of Aggregate Variance Elasticities*, formalizes three points:

1. identical concentration paths can generate different aggregate-variance elasticities;
2. a scaling exponent is an accounting outcome of component paths, not a primitive mechanism;
3. finite-interval variance elasticity can be attributed exactly to comparable diagonal and signed covariance changes.

This result does not reject conditional granular mechanisms. It clarifies the stochastic bridge required to infer a scaling law from concentration.

- [Read the manuscript and reproducible source](https://github.com/matuteiglesias/concentration-is-not-scaling)
- [Use the aggregation reading guide](./aggregation)

The aggregation programme is the current publication priority. The location-quotient and geography material below enriches the research identity and supplies future options, but does not displace that sequence.

## Three research domains

### 1. Aggregation, volatility, and diversification

The aggregation essay studies how firm-level fluctuations become aggregate volatility. Its central objects include firm-size distributions, direct weights, nonlinear micro fluctuations, population partitions, marginal variance, covariance, and departures from benchmark diversification.

Several thesis results now appear as antecedents to the current programme:

- the number of firms is not the same as the effective number of economically independent contributions;
- aggregation can make fluctuations approximately linear even when firm-level dynamics remain nonlinear;
- size-ranked and random partitions reveal different parts of the variance–covariance structure;
- a fitted population exponent can combine concentration, heterogeneous marginal volatility, dependence, entry, exit, and composition.

The [aggregation reading guide](./aggregation) is already organized for different readers, including a short conceptual route, an economist route, an empirics-first route, and a full-theory route.

### 2. Observation size, location quotients, and pLQ

The location quotient is commonly treated as a directly comparable measure of specialization. The thesis and subsequent published paper show that its distribution and persistence depend on the margins of the underlying economic table.

An identical LQ value may therefore represent a different economic state for observations of different sizes.

The **probabilistic location quotient** reframes the threshold \(LQ>1\) as a conditional transition probability:

\[
pLQ_{cp,t}=P\!\left(LQ_{cp,t+1}>1\mid\text{current size conditions}\right).
\]

The published contribution establishes the size-distortion problem and develops the probabilistic framework. Predictive calibration, diversification forecasting, and comparison with alternative measures remain possible future extensions rather than active claims of the current programme.

Suggested entry points:

- [Introduction to the location-quotient problem](./introduction-location-quotients)
- [Characterization of pLQ](./characterization-of-plq)
- [The probabilistic location quotient](./probabilistic-location-quotient)
- [Estimation of pLQ](./estimation-plq)
- [pLQ and diversification](./plq-predictor-diversification)
- [Full location-quotient section](./category/location-quotients)

### 3. Spatial support, correlation, and economic relatedness

The geography essay studies similarity and co-occurrence measures constructed from industry-by-area data. It interprets these objects as **locational correlation structures** and asks what they measure under different transformations, normalizations, category systems, and geographic supports.

The main conceptual bridge is between discrete and continuous space:

- an industry-by-county matrix records activity inside administrative units;
- a continuous spatial representation records overlap as a function of distance;
- the connection between them depends on the scale and geometry of the areas.

This suggests a present-day research question: when does an administrative partition behave like an implicit spatial kernel?

That formulation is a research direction grounded in the thesis and working paper. It is not being activated ahead of the aggregation programme.

Suggested entry points:

- [Abstract and overview](./abstract-cooccurrence-measures-economic-geography)
- [Similarity measures](./similarity-measures)
- [Cross-industry overlap](./solution-cross-industry-overlap)
- [Normalizations and self-overlap](./normalizations-and-industry-self-overlap)
- [Matching discrete and continuous coexistence](./matching-discrete-to-continuous-coexistence-measures)
- [Distance decay and coexistence](./distance-decay-coexistence)
- [Application to U.S. industries and regions](./application-correlation-structure-us-industries-regions)
- [Full geography section](./category/correlations-in-geography)

<a id="research-trails"></a>

## Curated research trails

The original thesis table of contents remains available, but most visitors will learn more quickly by following an economic question.

### Trail A — Why does diversification deviate from the benchmark?

Start with the [aggregation reading guide](./aggregation), then focus on:

- firm-size distributions and concentration;
- firms versus sectors;
- nonlinear micro-to-macro fluctuations;
- random and size-ranked partitions;
- variance, covariance, and effective population size;
- the current formal manuscript.

**Best for:** macroeconomists, firm-dynamics researchers, and readers of granular models.

### Trail B — Why is a location quotient not on a common scale?

Follow:

1. [The location-quotient problem](./observations-lq-problem)
2. [A convenient framework](./convenient-framework-location-quotient)
3. [Characterization of pLQ](./characterization-of-plq)
4. [The probabilistic location quotient](./probabilistic-location-quotient)
5. [Empirical distributions](./Location-Quotients/empirical-distributions)
6. [Conclusions](./Location-Quotients/conclusion-location-quotients)

**Best for:** regional economists, economic-complexity researchers, and users of revealed-comparative-advantage measures.

### Trail C — What does an industry-relatedness matrix measure?

Follow:

1. [Economic geography and spatial distribution](./economic-geography-spatial-distribution)
2. [Similarity measures](./similarity-measures)
3. [Cosine similarity between industries](./cosine-similarity-industries)
4. [Interpretation of the correlation matrix](./interpretation-correlation-matrix)
5. [Matching discrete to continuous coexistence](./matching-discrete-to-continuous-coexistence-measures)
6. [Network results](./results-network-industries)
7. [Geographical patterns](./results-geographical-patterns)

**Best for:** economic geographers, network researchers, and analysts constructing co-location or relatedness measures.

## Ideas worth carrying forward

The archive contains several compact propositions that can inform future research without becoming simultaneous active projects:

- **Firms are not sectors.** An approximation can become more accurate after aggregation and fail at the constituent level.
- **Population is not effective diversification.** Raw counts do not encode weights, marginal variance, or dependence.
- **The same LQ can mean different things.** Normalized indices may remain size-dependent.
- **Thresholds can become probabilities.** pLQ replaces a nominal boundary with a conditional transition object.
- **Relatedness depends on representation.** Counts, logs, normalization, and binary specialization can change the network.
- **The map is part of the measurement.** Administrative boundaries can become substantive assumptions.

These propositions are routes into the archive. Their status should be read from the associated paper or page, not inferred from their appearance on the homepage.

## Research status

| Research object | Status | Role in this portal |
| --- | --- | --- |
| *Concentration Is Not Scaling* | Current manuscript | Formal foundation for the active aggregation programme |
| Size distortions of location quotients and pLQ | Peer-reviewed publication | Published evidence on normalization and observation size |
| Correlation structures in economic geography | Working paper | Spatial antecedent and future research option |
| Thesis chapters, appendices, and notebooks | Research archive | Derivations, empirical explorations, figures, and technical provenance |

## Historical framing

Some pages preserve the terminology and interpretation used in the original thesis. Later work has refined several claims, especially around concentration, granular reasoning, and the interpretation of scaling exponents.

Where a thesis-era formulation and a current manuscript differ, the current manuscript should be treated as the authoritative formulation. The older page remains valuable as evidence of the path by which the question was developed.

## How to navigate this portal

- **Ten-minute overview:** remain on this page and use the three research-domain summaries.
- **Current-paper route:** open the manuscript repository, then use the aggregation reading guide for antecedents.
- **Empirical aggregation route:** enter the aggregation guide through the empirics-first path.
- **Specialization route:** follow Trail B through LQ and pLQ.
- **Geography and networks route:** follow Trail C from representation to network interpretation.
- **Full archive:** use the documentation sidebar and original thesis sections.

For academic background, affiliations, and research experience, see the [CV](./General/cv).
