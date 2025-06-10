---
sidebar_position: 20
slug: /appendix-plq-regressor
title: "Appendix: pLQ Regressor"
description: Learn how to compute pLQ probabilities using a custom regressor in Python, with detailed code examples.
keywords: [pLQ regressor, Python, sklearn, KNeighborsRegressor, data analysis]
tags: [Python, Machine Learning, Data Science]
---

## Appendix: pLQ Regressor

In this section, we provide a method to compute the **pLQ probabilities** in customized settings using Python. This involves using a **K-Nearest Neighbors Regressor** to estimate the probabilities.

### Code Implementation

Below is a Python function that estimates a pLQ regressor:

```python
import pandas as pd
from sklearn import neighbors

def pLQ_regressor(df, n):
    """Estimate a pLQ regressor
    Arguments:
    df -- (pandas dataframe) 
        Input data. must contain columns for:
        - The log observed values at t ('log_s')
        - The log size factor Sc Sp / Sw at t ('log_size_factor')
        - Whether LQ > 1 at t + 1 ('LQ_t+1')
    n -- number of neighbors
    """
    
    # Prepare X, y data for knn
    M = df[['log_s','log_size_factor','LQ_t+1']].as_matrix()
    X, y = M[:,:2], M[:, 2]
    
    # Fit
    knn = neighbors.KNeighborsRegressor(n_neighbors = n, weights = 'uniform').fit(X, y)
    
    return knn
```

### Example Usage

Here is how you can use the above function to fit the regressor and predict pLQ at a specific point:

```python
# Load the data as pandas DataFrame
df = pd.read_csv('./data.csv')

# Fit the regressor
knn = pLQ_regressor(df, n=5)

# Ask pLQ at a point i
pLQ_i = knn.predict([[log_s_i, log_size_factor_i]])
```

This example demonstrates loading data, fitting the regressor, and predicting the pLQ at a given point. Adjust the number of neighbors `n` as needed for your specific dataset.