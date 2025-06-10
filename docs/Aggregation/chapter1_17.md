---
sidebar_position: 17
slug: /more-about-partitions
title: More about Partitions
description: Explore the concept of partitions in aggregating firm sales, including equal weight and quantile partitions, and their implications for economic analysis.
keywords: [partitions, firm sales, equal weight, quantile partitions, economic analysis]
tags: [economics, data aggregation, partitions]
---

## More about Partitions

When analyzing firm sales, it's often useful to group firms into a family of non-overlapping subsets called **parts** (similar to sectors). Both aggregate sales and their variance are defined in an analogous way for firms and sectors, with the only difference being the index used.

$$
X_t = \sum_k S_{kt} = \sum_p S_{pt}
$$

Here, the indices $k$ represent firms and $p$ represent parts. Partitions can be determined by various criteria, such as industry sectors, geographical regions, or even random allocation.

**Footnote 1:** Partitions can also be defined on the sets of buyer firms as well as seller firms, allowing for a network approach to cross-accounting of sales. Using indices $p$ and $r$ for parts, total sales from exchanges between parts and firms can be expressed as:

$$
X = \sum\limits_{p,\ r} s_{pr} = \sum\limits_{p,\ r} \sum\limits_{k,\ l \in p,\ r} s_{kl}
$$

All sales from firm $k$ are associated with a firm $l$ on the other end.

$$
X = \sum\limits_{k} S_{k} = \sum\limits_{k,\ l} S_{kl}
$$

Here, $S$ represents the value of sales, and $k$ and $l$ represent a pair of firms.

**Footnote 2:** At a micro level, sales between a pair of firms during a given time period can be disaggregated into transactions $i$, composed of sales of items $j$ in quantities $q_j$ at prices $p_j$. The value of a transaction $s_j$ is in units of currency, derived from $s = p.q$. Aggregation is thus in units of currency. Prices can be assigned to each item $j$ when observed, without assuming they belong to a product, are time-dependent, or are consistent across different agents exchanging the same product.

$$
S_{k} = \sum\limits_i t_i = \sum\limits_i \sum\limits_{j \in t_i} {p_j q_j}
$$

In this work, $S_{k}$ is taken as given, focusing on aggregation up to the national level. Firm-level sales and atomistic items exchanged relate exactly in an ordinary sum.

$$
X = \sum\limits_{k} S_{k} = \sum\limits_{j} {p_j q_j}
$$

### Types of Partitions

Two types of partitions are particularly useful due to their formal properties:

- **Equal Weight Partitions:** These are partitions where the value held by any $P$ parts is the same, ideally $\bar S_p = \bar X/P$. While perfect precision may not be achievable, firms can often be separated into parts with weights close to $\bar X/P$. Randomized assignments to parts can be referred to as **random partitions**.

- **Quantile Partitions:** Also known as **size-sorted equal weight partitions**, these involve sorting firms by size before dividing them into $Q$ groups. Each partition's total sales are near $\bar S_q = \bar X/Q$. With a sufficient number of parts (e.g., $Q = 10, 20$), firms in most parts are close to a mean size ($\bar s_q$).

For quantile partitions, we expect $\bar S_q = \bar X/Q = \bar s_q n_q$, where $n_q$ is the number of firms in quantile $q$. The mean size $\bar s_q$ increases monotonically across successive parts $q$, necessitating a decrease in quantile population $n_q$ to maintain the quantile value near $\bar S_q = \bar X/Q$. Quantile partitions thus offer defined agent and population sizes, making them highly useful for analyzing micro moments as functions of agent size and quantile $q$.

*Note:* Grouping firms can reduce the impact of multiplicative shocks on terms that sum to $X_t$. Linear relationships may apply to sectoral accounts even if they don't at the firm level. The problem of explaining parts' sales in terms of firm sales will be addressed in a later section.