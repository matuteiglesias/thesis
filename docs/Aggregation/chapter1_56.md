---
sidebar_position: 56
slug: /experiment-power-sums
title: "Experiment 2: Power Sums"
description: This section details the methodology and execution of Experiment 2, focusing on power sums derived from theoretical distributions, and their statistical analysis.
keywords: [power sums, theoretical distribution, time series, statistical moments, experiment]
tags: [experiment, power sums, statistical analysis]
---


## Experiment 2: Power Sums

The aim of this experiment is to accompany the derivations in **Section: Aggregating a Group of Agents** (see [Section: Aggregating a Group of Agents](./aggregating-a-group-of-agents.md)). The essence of the program is quite simple:

- **Generate vectors** of length $n_q$ with realized values $D_i$ drawn from a theoretical distribution $D(\cdot)$.
- Compute the sum of values in the vector $10^{D(\cdot)}$.
- Divide it by the sum of the zero levels ($10^{\bm 0} = \bm {1}$), which is equal to $n_q$.

The outcome is a **time series** of length $T$, and we store its moments, as well as the moments of its log levels.

```python
import pandas as pd
import numpy as np

# (names of) Log shocks distributions
dists = ['norm', 'lapl', 'empirical']

# Values of micro standard deviation
ss = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7]

# Values of micro mean fluctuations
mus = [0, 0.01, 0.02, 0.05, 0.1]

# Repetitions
M = 200

# Time steps
T = 17

## List of results
results = []

s0 = empirical_shocks.std()

for distribution in dists:
    # Second quantile and next contain most of the value with few agents
    for q in range(Q)[1:]:
        n = population['n_q'][q] # number of agents in quantile.

        for s in ss: # micro sigma
            for mu in mus: # micro mu

                for m in range(M): # Repeat M times
                    if distribution == 'norm':
                        shocks = np.random.normal(mu, s, (n, T))
                    elif distribution == 'lapl':
                        shocks = np.random.laplace(mu, s/np.sqrt(2), (n, T))
                    elif distribution == 'empirical':
                        shocks = (mu + np.random.choice(emp_shocks, n * T)*(s/s0)).reshape(n, T)

                    ratio = np.power(10, shocks).sum(0)/n 

                    log_ratio = np.log10(ratio) 

                    results += [[distribution, s, mu, n, m, ratio.mean(), ratio.std(), ratio.var(), log_ratio.mean(), log_ratio.std(), log_ratio.var()]]

# Create dataframe with the computed information
result = pd.DataFrame(results, columns = ['distribution', 's', 'mu', 'nq', 'repeat', 'mean_ratio', 'std_ratio', 'var_ratio', 'mean_log_ratio', 'std_log_ratio', 'var_log_ratio'])

# Save pandas DataFrame
result.to_csv('./filename.csv', index = False)
```

The above code snippet demonstrates the process of generating and analyzing the power sums. The results are stored in a pandas DataFrame and saved to a CSV file for further analysis.