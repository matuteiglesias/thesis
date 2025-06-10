---
sidebar_position: 55
slug: /appendix-computational-experiments
title: "Appendix IV: Computational Experiments"
description: Detailed description of computational experiments for measuring dependence of aggregate idiosyncratic variance with population size.
keywords: [computational experiments, idiosyncratic variance, population size, Python, Jupyter Notebooks]
tags: [experiments, data analysis, Python]
---


## Appendix IV: Computational Experiments

The codes for reproducing all results in this paper are available in a GitHub **[repository](https://github.com/matuteiglesias/French_exports_bkp)**. The language used is Python, and files are Jupyter notebooks. Below is a description of each experiment performed, along with pseudo code.

### Exp. 1. Dependence with N

This experiment aims to measure the dependence of aggregate idiosyncratic variance ($\sigma^2_\epsilon$) with population size ($N$). The process follows these steps:

- **Prepare dataset**
- **Sample $N$ agents with replacement**
  - Compute aggregate statistics.
  - Apply random partition and compute parts' time series.
  - Apply quantile partition and compute parts' time series.
- **Separate medians from idiosyncrasies**
- **Compute covariance matrices**

For this exercise, we aim to create a dataset similar to the raw data, with the condition that there is no entry and exit. The steps are:

1. Keep only firms active in at least 6 of the total 17 years available.
2. Fill inactive years with the mean value of the respective firms.
3. Retain only firms trading more than $1m EUR$ on average.

These changes result in a dataset with a size distribution similar to the upper tail (Pareto part) of the original data. Firms trading more than $1m EUR$ on average are present in most time steps, so the n/a filling is minimal. Additionally, the largest firms concentrate most of the value, so retaining only those above $1m EUR$ still accounts for nearly all of French firms' international trade.

```python
# Number of parts:
Q = 10

# Load data, sales by firm, year.
df = pd.read_csv('./ID_Y.csv')
sales = df.groupby(['IMPORT', 'ID', 'YEAR'])['VART'].sum().unstack()

for i in [0, 1]:

    # Choose firms with presence in most samples to avoid high distortion filling exit gaps
    sales_filt = sales.loc[sales.count(1) > 6]
    filt_fm = sales_filt.copy()

    # Large firms pareto filled mean. 
    for col in filt_fm:
        filt_fm[col] = filt_fm[col].fillna(sales_filt.mean(axis=1))

    # Hard cut for Pareto tail
    filt_fm = filt_fm.loc[filt_fm.mean(1) > 1e6]
    
    ## Sanity checks. What is the total after we filled non-active gaps and kept large firms
    X = sales.sum().mean()
    X_actives = sales_filt.sum().mean()
    X_act_lrg = filt_fm.sum().mean()

    print(X_actives/X)
    print(X_act_lrg/X_actives)
    print(X_act_lrg/X)
    
# Save dataset
filt_fm.to_csv('./firms_data.csv')
```

The processed dataset is always within 10 percent of the total observed in the raw data.

For the experiment, we will sample $N$ agents with replacement and compute aggregate statistics, apply partitions, and compute the cross covariance matrices these present.

```python
# Population numbers
logn_vals = [2.5, 2.65, ..., 3.7, 3.85] # log scale
n_vals = [300., 400., ..., 5000., 7100.] # linear scale

# Repetitions
M = 150

data = pd.read_csv('./firms_data.csv')

for i in [0, 1]: # Exports / Imports
    for N in n_vals:
        for m in range(M):

            # Sample with replacement from agents' time series
            n_sample = data.sample(int(N), replace=True)
            
            ## Calculate aggregate magnitudes: Total, firm sizes, Herfindahl.
            X_t = n_sample.sum()
            Si = n_sample.mean(1)
            herf2 = ((Si/Si.sum())**2).sum()
            agg_res += [[m, X_t.mean(), X_t.std(), np.log10(X_t).std(), herf2]]
            
            # Partition (random parts) 
            n_sample_p = n_sample.copy()
            n_sample_p['p'] = pd.cut(n_sample_p.sum(1).cumsum(), Q, labels=range(Q))

            # Aggregate to parts' time series, and count parts' population.
            n_m_p_out = n_sample_p.groupby('p').sum().reset_index()
            n_m_p_out['n'] = n_sample_p.groupby('p').size().values
            
            # Partition (quantile parts) 
            n_sample_q = n_sample.copy() 
            n_sample_q = n_sample_q.loc[n_sample_q.sum(1).sort_values().index]  ## SORTING
            n_sample_q['p'] = pd.cut(n_sample_q.sum(1).cumsum(), Q, labels=range(Q))

            # Aggregate to parts' time series, and count parts' population.
            n_m_q_out = n_sample_q.groupby('p').sum().reset_index()
            n_m_q_out['n'] = n_sample_q.groupby('p').size().values    

            <Store results>
            
<Concatenate results and save>
result_aggs
result_Sp
result_Sq
```

Next, we compute medians across the $M$ repetitions and use it as a proxy for the comovement time series of parts.

```python
# Store medians across M repetitions
medians_p = result_Sp.groupby(['IMPORT', 'N', 'p']).transform('median'); 

# Idiosyncrasies are the actual values minus the medians
res_nmp = result_Sp.set_index(['IMPORT','N', 'p']) - medians_p; 

# Store info
info_p = pd.concat([medians_p, res_nmp])

<Repeat for result_Sq in place of result_Sp>
```

Finally, compute the values of the cross covariance matrix for each setting and each of the $M$ repetitions.

```python
cov_out_list = [] # List for outcoming cov values

for i in [0, 1]: # Exports / Imports
    for N in n_vals: # For all the sampling sizes (population N)
        for m in range(M): # For each of the repetitions
            for k, sorting in enumerate([False, True]): # For both random and sorted parts
                info = [info_p, info_q][k]
                df_ = info.loc[(info.IMPORT == i) & (info.m == m) & (info['N'] == N)]
                df_ = df_.set_index(['comp', 'p'])[[str(y) for y in range(1997, 2013)]]
                cov_m = df_.T.cov()

                cov_vals = cov_m.stack([0, 1])
                cov_vals.index.names = ['comp1', 'p1', 'comp2', 'p2']; 
                cov_vals.name = 'cov_ij'

                # Store
                cov_out_list += [cov_vals]
            
# Concatenate
cov_results = pd.concat(cov_out_list)
```

Now, we have $M$ (e.g., $M = 150$) realizations of each element of the cross covariance matrix, separated into median (comovement) and residual (idiosyncratic) parts, for different population sizes $N$ and both for imports and exports. This information has multiple uses, such as creating the plots in **Figure N_decay_P**.