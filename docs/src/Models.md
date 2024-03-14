# Model Constructors

StateSpaceSciML provides a set of functions to construct NODE and UDE with varying levels of customization. The model constructors all require the data to be passed using a DataFrame object from the DataFrames.jl library. The data frame should be organized with a column for time named `t`, and the remaining columns shoud have the value of the state variables at each point in time.


|t  |``X_1`` | ``X_2``|
|---|----|----|
|0.1| 0.0| -1.1|
|0.2| 0.01| -0.9|
|0.5| 0.51|-1.05|
Table: Example data set with two state variables

Currently, missing data are not supported, but irregular intervals between time points are allowed.

Each constructor function will require additional inputs to specify the model structure. For example, the `CustomDerivatives` function requires the user to supply the known functional forms through the `derivs!` argument. These arguments are described in detail in the subsection for each model type.

Finally, the constructor functions share a set of key work arguments used to tune the model fitting procedure. These control the weight given to the process model, observaiton model and regularization in the loss function and can be tuned to control the complexity of the estimated model and to accommodate varying levels of observational errors:

- proc_weight=1.0 : The weight given to the model predictions in loss function
- obs_weight=1.0 : The weight given to the state estimates in loss function
- reg_weight=0.0 : The weight given to regularization in the loss function.

In addition to these weighting parameters, two key work arguments, `l = 0.25` and `extrap_rho = 0.0`, controls how the model extapolates beyond the observed data. The parameter `l` defines how far away the model will extrapolate before shifting to the default behavior and `extrap_rho` defines the default when extrapolating. When forecasting, the model will modify the trained process model ``f(u_t;\theta)`` when extrapolating to a new function the combines the fitted model and the default behavior


```math
\bar{f}(u_t|\theta,l,\rho )=   \left\{
\begin{array}{ll}
      f(u_t;\theta) & min(\hat{u}) < u_t < max(\hat{u}) \\
      e^{(\frac{u_t - min(\hat{u}_t)}{l})^2}f(u_t;\theta) + (1-e^{(\frac{u_t - min(\hat{u}_t)}{l})^2}) \rho &u_t < min(\hat{u}) \\
      e^{(\frac{u_t - max(\hat{u}_t)}{l})^2}f(u_t;\theta) - (1-e^{(\frac{u_t - min(\hat{u}_t)}{l})^2}) \rho &u_t > max(\hat{u}) \\
\end{array} 
\right.  
```


## NODES and NNDE
NODEs and NNDEs use neural networks to build fully nonparametric models in continuous and discrete time respectively. NODEs use a neural network as the right hand side of a differntial equation 

```math
   \frac{dx}{dt} = NN(x;w,b),
```

and NNDE use a neurla network as the right havd side of a differnce equation

```math
   x_{t+1} = x_t + NN(x_t).
```

The `NODE` and `NNDE` function construct each model type.

```@docs
StateSpaceSciML.NODE(data;kwargs ... )
StateSpaceSciML.NNDE(data;kwargs ...)
```

Covariates can be added to the model by supplying a second data frame `X` This data frame must have the same format as the primary data set, but the time points need not match. The `NODE` and `NNDE` functions will append the value of the covarates at each point in time to the nerual network inputs

```math
   \frac{dx}{dt} = NN(x,X(t);w,b) \\
   x_{t+1} = x_t + NN(x_t, X(t)).
```
The value of the covarates between time point included in the data frame `X` are interpolated using a linear spline.  

```@docs
StateSpaceSciML.NODE(data,X;kwargs ... )
```

## UDEs
The CustomDerivatives and CustomDifference function can be used to build models that combine nerual networks and known functional forms. These function take user defined models and consturct a loss function and provide access to the model fitting and testing functions provided by `StateSpaceSciML.jl`
```@docs
StateSpaceSciML.CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )
StateSpaceSciML.CustomDiffernce(data,step,initial_parameters;kwrags...)
```

## Adding Covariates

In this context the 
```@docs
StateSpaceSciML.CustomDerivatives(data,X,derivs!,initial_parameters;kwargs ... )
StateSpaceSciML.CustomDiffernce(data,X,step,initial_parameters;kwargs ... )
```

## Other functions
```@docs
StateSpaceSciML.NNDE(data;kwargs ...)
StateSpaceSciML.DiscreteUDE(data,step,init_parameters;kwargs ...)

StateSpaceSciML.UDE(data,derivs,init_parameters;kwargs...)
```