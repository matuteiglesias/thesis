---
sidebar_position: 16
slug: /normalizations-and-industry-self-overlap
title: Normalizations and Industry Self-Overlap
description: Explore the normalization techniques in industry coexistence and the solution for industry self-overlap, incorporating Gaussian and Laplace density functions.
keywords: [normalization, industry coexistence, Gaussian, Laplace, density functions, cosine similarity]
tags: [mathematics, industry analysis, probability]
---


## Normalizations

In practice, it is beneficial to set the coexistence of an industry with itself to be equal to 1. This requires a **normalization** in the definition of the dot product and the joint probability. We rescale the joint probability so that when computed for a function on itself, the result is 1. This normalization ensures that the joint probability remains independent of proportional scaling of the density function of some industries (e.g., changing $F_y$ to $2 F_y$).

The expression for the normalized joint probability is:

$$
\frac{\iint\limits_{R} F_{x} F_{y} dR}{\sqrt{\iint\limits_{R} F_{x}^{2} dR} \sqrt{\iint\limits_{R} F_{y}^{2} dR}}
$$

An analogous requirement applied to the dot product of areal vectors leads to an expression of **cosine similarity**:

$$
\frac{\sum\limits_{a}E_{x,a} . E_{y,a}}{\sqrt{\sum\limits_{a} E_{x,a}^2 } \sqrt{\sum\limits_{a} E_{y,a}^2 }}
$$

We aim to minimize the summations $B$ and $C$, ensuring the amplitudes in both continuous and discrete cases are linked:

$$
\frac{ E_{xi} E_{yj}}{\sqrt{\sum\limits_{a} E_{x,a}^2 } \sqrt{\sum\limits_{a} E_{y,a}^2 }}  = \frac{\iint\limits_{R}  f_{x, i}(\textbf{x}) f_{y, j}(\textbf{x}) dR}{\sqrt{\iint\limits_{R} F_{x}^{2} dR} \sqrt{\iint\limits_{R} F_{y}^{2} dR}}  ;\ \ \forall i, j \in A
$$

## Solution for Industry Self-Overlap

When applied to an industry $x$ on itself, we have:

$$
\frac{ E_{xi}^2}{\sum\limits_{a} E_{x,a}^2}  = \frac{\iint\limits_{R}  f^2_{x, i}(\textbf{x}) dR}{ \iint\limits_{R} F_{x}^{2} dR } ;\ \ \forall i, j \in A 
$$

To establish a specific relationship between density functions and the magnitude of employment, consider:

- **Gaussian**:

  $$
  g_{x, i}(\textbf{x}) = \frac{t_i}{2 \pi \sigma^2} e^{-(\textbf{x} - \mu_i)^2 / (2 \sigma^2)}
  $$

- **Laplace (Exponential Decay)**:

  $$
  f_{x, i}(\textbf{x}) = \frac{t_i}{2b^2} e^{-|\textbf{x} - \mu_i| / b}
  $$

These functions are characterized by three parameters: an amplitude $t$, a width parameter ($\sigma$ or $b$), and a position parameter $\mu$.

The area integral of the product of two 2D Gaussian bells separated by distance $\Delta$ is:

$$
\iint\limits_{R}  g_{x, i}(\textbf{x}) g_{y, j}(\textbf{x}) dR = \frac{t_i t_j}{2 \pi \left(\sigma_i^2+\sigma_j^2\right)}   \exp{ \left(-\frac{\Delta^2}{2 \left(\sigma_i^2+\sigma_j^2\right)} \right)}
$$

In the limit $\Delta \rightarrow 0$, this simplifies to:

$$
\iint\limits_{R}  g_{x, i}(\textbf{x}) g_{y, j}(\textbf{x}) dR \rightarrow \frac{t_i t_j}{2 \pi \left(\sigma_i^2+\sigma_j^2\right)}
$$

For exponential decay density functions at $\Delta = 0$, we have:

$$
\iint\limits_{R}  f_{x, i}(\textbf{x}) f_{y, j}(\textbf{x}) dR = \frac{t_i t_j}{2 \pi \left(b_i+b_j\right)^2 }
$$

To summarize, for self-overlap of an industry ($\Delta = 0$, $i = j$), these results are expressed as:

$$
\iint\limits_{R}  h^2_{x, i}(\textbf{x}) dR = \frac{t_i^2}{2 \pi s_i^2 }
$$

where $s_i \equiv 2 \sigma_i^2$ for Gaussian and $s_i = 4 b_i^2$ for Laplace.

For an industry’s similarity with itself, Eq. disc_cont_self links overlaps in continuous space with observed employee counts. By replacing self_overlap_gen into disc_cont_self, we derive the intensity of the density function in terms of observed employment:

$$
t_i = \sqrt{2 \pi} s_i \left( \frac{\sqrt{\int_A F^2_x dR}}{|| E_{x,a} ||}  \right) E_{x, i}
$$

This equation indicates that the intensity of the probability density function is proportional to the number of employees, with the proportionality factor determined by the ratio of norms in discrete and continuous space and the width of influence.