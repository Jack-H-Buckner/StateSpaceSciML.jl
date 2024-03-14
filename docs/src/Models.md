# Model Constructors

StateSpaceSciML provides a set of functions to construct NODE and UDE with varying levels of customization. The model constructors all require the data to be passed using a DataFrame object from the DataFrames.jl library. The data frame should be organized with a column for time named `t` and the remianing columns shoud have the value of the state variables at each point in time.


|t  |``X_1`` | ``X_2``|
|---|----|----|
|0.1| 0.0| -1.1|
|0.2| 0.01| -0.9|
|0.5| 0.51|-1.05|
Table: Example data set with two state vaiables

Currently mising data are not supported, but irregular intervals between time points are allowed. 

Each constructor function will require addtional inputs to specify the model structure. For example, the `CustomDerivatives` function requires the user supply the known functional forms through the `derivs!` argument. These aregumetns are described in detail in the subsection for each model type. 

Finally, the constructor functions share a set of key work arguments that are used to tune the model fitting procedure. These control the weight given to the process model, observaiton model and regualrization in the loss function and can be tuned to control the complexity of the estimated model and to accomidate variying levels of observaitonal errors: 

- proc_weight=1.0 : Weight given to the model predictiosn in loss funciton
- obs_weight=1.0 : Weight given to the state estiamtes in loss function 
- reg_weight=0.0 : Weight given to regularization in the loss function. 

In addtion to these weighting parameters two key work arguments `l = 0.25` and `extrap_rho = 0.0` control how the model extapolated beyond the observed data. The paramter `l` defines how far away the modle will extrapolate before shifting to the default behavior and `extrap_rho` defined the default when extrapolating. When forecasting the model will modify the trained process model ``f(u_t;\theta)`` when extapolating to a new fucntion

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
The simplest models to implement are the fully nonparametrics neural ordinary differential equation (NODE) and neural newtork difference equation (NNDE). These functions use a neural network to represent the right hand side of a system of differential equations and differnce equation respectively

```math
   \frac{dx}{dt} = NN(x;w,b) \\
   x_{t+1} = NN(x_t;w,b)
```

The `NODE` function builds a NODE model for a user supplied data set and `NNDE` build 

```@docs
StateSpaceSciML.NODE(data;kwargs ... )

```

Covariates can be added to the model by supplying a second data frame `X` with thier values at differnt points in time. The value of the covaritates are appended to the state vector ``x`` to create the input for the neural network

```math
   \frac{dx}{dt} = NN(x,X(t);w,b) \\
   x_{t+1} = NN(x_t,X_t;w,b)
```

The NODE models use a linear interpolation to approximate the value fo the covarites between observations. odel with covariates have not been developed for the discrete time case yet.  

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