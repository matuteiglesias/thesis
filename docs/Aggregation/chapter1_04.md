---
sidebar_position: 2
slug: /introduction-aggregate-volatility
title: Introduction to Aggregate Volatility
description: Explore the dynamics of economic agents and aggregate characteristics, emphasizing the role of size distributions and micro fluctuations.
keywords: [aggregate volatility, economic agents, size distribution, micro fluctuations, empirical analysis]
tags: [economics, volatility, data analysis]
---

## **Introduction**

Understanding the connection between the dynamics of a large number of economic agents and the aggregate characteristics observed on such a population is a clear and recurrent motivation of economic studies. Although this is not a new problem, today's technical possibilities provide approaches that were previously out of reach, offering new insights into this enduring question.

### **Technological Advancements in Economic Studies**

The increasing availability of detailed evidence in digital formats and the growing use of computers in research have significantly transformed economic studies. Computers are now used for heavy and sophisticated data processing and, in some cases, as programmable calculators. This evolution has diminished long-standing technical limitations, yet not all questions have been reformulated in light of these new possibilities.

When the aggregate variable ($X$) is simply the sum of a quantity ($s_i$) observed in each agent of the population, the relation $X = \sum_i s_i$ provides a formal condition guiding the study of the problem. An aggregate variable $X$ is characterized by its mean level $E[X]$ and the width of deviations from it, $std[X] = \sqrt{var[X]}$, where $\operatorname{E}$, $std$, and $var$ are the **expected value**, **standard deviation**, and **variance** operators, respectively. The term **aggregate volatility** refers to $var[X]$. Are there insightful expressions of $var[X]$ in terms of the characteristics of the population of agents? This is what we aim to study in this paper, both by reviewing established ideas and by exploring undeveloped links in the aggregation of micro fluctuations. 

### **Opportunities Presented by Modern Tools**

Modern tools allow us to focus theoretical developments on empirically relevant settings. While a general problem may be too broad, data can simplify the task by directing us to understand specific mechanisms that play a significant role in practice. Parameters of an empirical system, such as population sizes and moments of micro fluctuations, can constrain and guide the analysis, giving meaning to the answers we find.

A consequence of these new technical means is the ability to avoid empirically irrelevant problems while confidently exploring necessary formal paths to understand empirical situations (see **[Section: Aggregating a Group of Agents](./aggregating-a-group-of-agents.md)**). Moreover, we can now verify the validity of complex equations in the context of the problem with a confidence that was previously unattainable without computer testing. Hypothesis testing using techniques like **bootstrapping** becomes feasible, allowing us to measure macro results of changing micro characteristics and explain these outcomes in light of theoretical expectations.

### **Empirical Benchmark and Methodological Departures**

Our empirical benchmark includes all French firms importing and exporting from 1997 to 2014. Although this work is closely tied to the real dynamics of this reference population, it deviates from popular approaches to understanding volatility aggregation. Neoclassical models in business cycle theory have influenced the study of aggregate volatility, often starting with a system of optimizing agents. However, aggregate volatility does not necessarily require these models. By setting models aside, we derive insights not dependent on specific choices, avoiding variables not easily observable and preventing solid empirical testing.

Another approach to understanding volatility involves identifying factors correlating with increased volatility. Here, we trace micro fluctuations from the bottom up, understanding how micro characteristics determine the observed aggregate variance, rather than explaining variance by a factor. The decision-making of agents, often central in theoretical approaches, is abstracted from in this work. Instead, we focus on how agent levels are aggregated and the mechanisms involved, a formal task distinct from understanding the origins of micro fluctuations.

### **Key Features Influencing Aggregate Volatility**

The agents' size distribution and the distribution of their fluctuations are crucial in determining the formal frameworks needed. The size distribution of economic agents is often log-normal or follows a power law (Pareto). The distribution of fluctuations, although suggested to be log-distributed by Gibrat, has been more clearly defined in recent studies as multiplicative and of large magnitude.

A population of thousands of non-linearly fluctuating agents is complex and presents non-intuitive mechanisms. For example, concentration due to Pareto or log-normal size distributions means that a few large agents drive aggregate volatility towards their level of volatility. This intuitive feature gained consensus only recently.

### **Clarifying Misconceptions in Volatility Aggregation**

A significant reference in current studies on aggregate variance is Gabaix (2011). However, this contribution has established misconceptions regarding volatility aggregation that need clarification. It claims a direct relation between size distribution parameters and the rate of decay of idiosyncratic variance, a relation not observed empirically. This is because of ignoring large multiplicative fluctuations, making it impossible to express aggregate volatility as a linear combination of agents' volatility.

In this paper, we follow the aggregation with the care it requires, exploring various interactions resulting in the observed levels of aggregate volatility in large populations of fluctuating agents. The basic properties of aggregate variance and the shape of the logarithmic curve imply value-weighted contributions to aggregate variance. Concentration due to log-normal or Pareto size distributions allows groups of few large agents to drive the idiosyncratic part of aggregate volatility.

Separately, there is a departure from the law of large numbers (LLN) in the decay of volatility with the number of agents. This milder decay is accounted for by highly non-linear firm-level shocks resulting in comovements among agents. The idea that size distributions explain the postponement of the LLN, as proposed by Gabaix (2011), requires revision due to substantial formal gaps.