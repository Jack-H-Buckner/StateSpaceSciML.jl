# Model Constructors

StateSpaceSciML provides a set of functions to construct NODE and UDE with varying levels of customization. Currently 

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