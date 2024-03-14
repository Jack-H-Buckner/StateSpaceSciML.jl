var documenterSearchIndex = {"docs":
[{"location":"ModelTesting/#Test-models","page":"Test models","title":"Test models","text":"","category":"section"},{"location":"ModelTesting/","page":"Test models","title":"Test models","text":"StateSpaceSciML.plot_state_estiamtes(UDE::UDE)\nStateSpaceSciML.print_parameter_estimates(UDE::UDE)\nStateSpaceSciML.plot_predictions(UDE::UDE)\nStateSpaceSciML.plot_predictions(UDE::UDE, test_data::DataFrame)\nStateSpaceSciML.forecast(UDE::UDE, u0::AbstractVector{}, times::AbstractVector{})\nStateSpaceSciML.plot_forecast(UDE::UDE, T::Int)\nStateSpaceSciML.plot_forecast(UDE::UDE, test_data::DataFrame)\nStateSpaceSciML.leave_future_out_cv(model; forecast_length = 10,  K = 10, spacing = 1, step_size = 0.05, maxiter = 500)","category":"page"},{"location":"ModelTesting/#StateSpaceSciML.plot_state_estiamtes-Tuple{UDE}","page":"Test models","title":"StateSpaceSciML.plot_state_estiamtes","text":"plot_state_estiamtes(UDE::UDE)\n\nPlots the value of the state variables estiamted by the UDE model. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#StateSpaceSciML.print_parameter_estimates-Tuple{UDE}","page":"Test models","title":"StateSpaceSciML.print_parameter_estimates","text":"print_parameter_estimates(UDE::UDE)\n\nprints the value of the known dynamcis paramters. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#StateSpaceSciML.plot_predictions-Tuple{UDE}","page":"Test models","title":"StateSpaceSciML.plot_predictions","text":"plot_predictions(UDE::UDE)\n\nPlots the correspondence between the observed state transitons and the predicitons for the model UDE. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#StateSpaceSciML.plot_predictions-Tuple{UDE, DataFrame}","page":"Test models","title":"StateSpaceSciML.plot_predictions","text":"plot_predictions(UDE::UDE, test_data::DataFrame)\n\nPlots the correspondence between the observed state transitons and observed transitions in the test data. \n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#StateSpaceSciML.forecast-Tuple{UDE, AbstractVector, AbstractVector}","page":"Test models","title":"StateSpaceSciML.forecast","text":"forecast(UDE::UDE, u0::AbstractVector{}, times::AbstractVector{})\n\npredicitons from the trained model UDE starting at u0 saving values at times.\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#StateSpaceSciML.plot_forecast-Tuple{UDE, Int64}","page":"Test models","title":"StateSpaceSciML.plot_forecast","text":"plot_forecast(UDE::UDE, T::Int)\n\nPlots the models forecast up to T time steps into the future from the last observaiton.  \n\nUDE - a UDE model object T - the nuber of time steps to forecast\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#StateSpaceSciML.plot_forecast-Tuple{UDE, DataFrame}","page":"Test models","title":"StateSpaceSciML.plot_forecast","text":"plot_forecast(UDE::UDE, test_data::DataFrame)\n\nPlots the models forecast over the range of the test_data along with the value of the test data.   \n\nUDE - a UDE model object T - the nuber of time steps to forecast\n\n\n\n\n\n","category":"method"},{"location":"ModelTesting/#StateSpaceSciML.leave_future_out_cv-Tuple{Any}","page":"Test models","title":"StateSpaceSciML.leave_future_out_cv","text":"leave_future_out_cv(model; forecast_length = 10,  K = 10, spacing = 1, step_size = 0.05, maxiter = 500)\n\nRuns K fold leave future out cross validation and returns the mean squared forecasting error and a plot to visulaize the model fits.\n\n...\n\nArguments\n\nmodel - the UDE model to test forecastlength - the number of steps to calcualte the forecast performance (default 10). K - the number of forecast tests to run (default 10). spacing - the number of data points to skip between testing sets (default 1). stepsize - step size parameter for the gradient decent algorithm (default 0.05). maxiter - number of iterations for gradent decent (default 500)..  ...\n\n\n\n\n\n","category":"method"},{"location":"NutsAndBolts/#UDE-model-construction","page":"UDE model construction","title":"UDE model construction","text":"","category":"section"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"Some users may wish to access elements of a fitted model directly to create custom model visualizations, performance tests, or other applications not forseen by thr developers. To this end, we provide documentation of classes (Julia mutable structs) used by StateSpaceSciML.jl to build the NODE and UDE objects. The package is built around the UDE class which stores the data used to fit a model and instances of six submodel classes used to define the full model. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"StateSpaceSciML uses a state space modeling framework to define and fit NODE and UDE models. State space models are a class of time series models that describe a time series data with a process model that describes the dynaics of a sequence of unobserved state variables u_t a second observaiton model defines the relationship between the state variables u_t and the observations x_t.  The process model f predicts value of the state variables one step ahead","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"hatu_t+Delta t  = f(u_t t Delta t theta_proc)","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where Delta t is the time span between observations, and theta_proc is the model paramters. The observaiton model maps from the state variables u_t to the observations","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"x_t = h(u_t t Delta t theta_obs)","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where theta_obs are the observaiton model parameters. In addition to these primary functions both the observaiton models and process models have loss funtion to measure the accuracy of thier predictions. These can be thought of like the likelihood models used in generalized linear models. for example, we can measure the perforance of the process model with a normal likelihood","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"L(hatu_tu_t) = frac1sigma sqrt2pi e^-frac12(frachatu_t-u_tsigma)^2","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where sigma is the variance of the prediciton errors. Although in principal any likelihood can be used, we use the mean squared error in our base model specification. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"The UDE models also include submodels to regualrize the process and observaiton models. The regualrization models are functions of the model parameters that add to the loss funtion. The regularizaiton models are ineffect priors on the model parameters. Regularization in expecially important for nerual network models. For example, out default model constructors apply L2 regualrizaiton to neuarl network paramters in the process model","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"R(theta_proc) = omega theta_proc_L2","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where omega is the weight given to regualrization in the over all loss function. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"These six model components are all combined into one loss functions used to fit the UDE models","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"L(utheta_proctheta_obsx) = sum_t =1^T L_obs(x_th(u_ttheta_obs)sigma_obs) + sum_t=2^T L_proc(u_tf(u_t-1theta_proc)sigma_proc) + R_obs(theta_obs) + R_proc(theta_proc)","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"where the sigma_i are paramters for the loss functions and the theta_i are paramters for the prediction functions. ","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"The UDE object combines the observation and process models and their rpective loss and regualrization models into one larger model object along with the data used to fit the model.","category":"page"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"UDE","category":"page"},{"location":"NutsAndBolts/#StateSpaceSciML.UDE","page":"UDE model construction","title":"StateSpaceSciML.UDE","text":"UDE\n\nBasic data structure used to the model structure, parameters and data for UDE and NODE models.  ...\n\nElements\n\ntimes: a vector of times for each observation\ndata: a matrix of observaitons at each time point\nX: a DataFrame with any covariates used by the model\ndata_frame: a DataFrame with colums for the time of each observation and values of the state variables\nparameters: a ComponentArray that stores model parameters\nloss_function: the loss function used to fit the model\nprocess_model: a Julia mutable struct used to define model predictions \nprocess_loss: a Julia mutable struct used to measure the peroance of model predictions\nobservation_model: a Julia mutable struct used to predict observaitons given state variable estiamtes\nobservaiton_loss: a Julia mutable struct used to measure the performance of the observaiton model\nprocess_regularization: a Julia mutable struct used to store data needed for process model regularization\nobservation_regularization: a Julia mutable struct used to store data needed for observation model regularization\nconstructor: A function that initializes a UDE model with identical structure. \n\n...\n\n\n\n\n\n","category":"type"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"StateSpaceSciML.ProcessModel","category":"page"},{"location":"NutsAndBolts/#StateSpaceSciML.ProcessModel","page":"UDE model construction","title":"StateSpaceSciML.ProcessModel","text":"ProcessModel\n\nA Julia mutable struct that stores the functions and parameters for the process model.  ...\n\nElements\n\nparameters: ComponentArray\npredict: Function the predict one time step ahead\nforecast: Function, a modified version of rpedict to imporve performace when extrapolating\ncovariates: Function that returns the value of the covariates at each point in time. \n\n...\n\n\n\n\n\n","category":"type"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"StateSpaceSciML.LossFunction","category":"page"},{"location":"NutsAndBolts/#StateSpaceSciML.LossFunction","page":"UDE model construction","title":"StateSpaceSciML.LossFunction","text":"LossFunction\n\nA Julia mutable struct that stores the loss function and parameters. ...\n\nElements\n\nparameters: ComponentArray\nloss: Function \n\n...\n\n\n\n\n\n","category":"type"},{"location":"NutsAndBolts/","page":"UDE model construction","title":"UDE model construction","text":"StateSpaceSciML.Regularization  ","category":"page"},{"location":"NutsAndBolts/#StateSpaceSciML.Regularization","page":"UDE model construction","title":"StateSpaceSciML.Regularization","text":"Regularization\n\nA Julia mutable struct that stores the loss function and parameters. ...\n\nElements\n\nreg_parameters: ComponentArray\nloss: Function \n\n...\n\n\n\n\n\n","category":"type"},{"location":"MultipleTimeSeries/#Fitting-a-model-to-multiple-time-series","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"","category":"section"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"StateSpaceSciML provides a set of functions to fit models to multiple time series. The functions for this mirror the fucntions for fitting NODEs and UDE to single time series with prefix Multi. For example, to build a NODE model for multiple time series you woudl use the MultiNODE function. The functions for model fitting, testing and visualization have the same names. The other imporant differnce is the data formate, a colum with a unique index for each time series must be included. ","category":"page"},{"location":"MultipleTimeSeries/#Dataframe","page":"Fitting a model to multiple time series","title":"Dataframe","text":"","category":"section"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"t series x1 x2\n1 1 x_11t x_12t\n2 1 x_11t x_12t\n3 1 x_11t x_12t\n1 2 x_21t x_22t\n2 2 x_21t x_22t\n3 2 x_21t x_22t","category":"page"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"Covarate can be added to the models as well. The covarates dataframe must have the same sturcture ","category":"page"},{"location":"MultipleTimeSeries/","page":"Fitting a model to multiple time series","title":"Fitting a model to multiple time series","text":"StateSpaceSciML.MultiNODE(data;kwargs...)","category":"page"},{"location":"MultipleTimeSeries/#StateSpaceSciML.MultiNODE-Tuple{Any}","page":"Fitting a model to multiple time series","title":"StateSpaceSciML.MultiNODE","text":"MultiNODE(data;kwargs...)\n\nbuilds a NODE model to fit to the data. data is a DatFrame object with time arguments placed in a colum labed t and a second colum with a unique index for each time series. The remaining columns have observation of the state variables at each point in time and for each time series.\n\n\n\n\n\n","category":"method"},{"location":"#StateSpaceSciML.jl","page":"StateSpaceSciML.jl","title":"StateSpaceSciML.jl","text":"","category":"section"},{"location":"","page":"StateSpaceSciML.jl","title":"StateSpaceSciML.jl","text":"A library to build Neural ordinary differntial equtions (NODEs) and Universal differential eqautions (UDEs) for ecological data.","category":"page"},{"location":"#What-are-NODEs-and-UDE?","page":"StateSpaceSciML.jl","title":"What are NODEs and UDE?","text":"","category":"section"},{"location":"","page":"StateSpaceSciML.jl","title":"StateSpaceSciML.jl","text":"Describe NODES / UDEs ","category":"page"},{"location":"#How-StateSpaceSciML.jl-works","page":"StateSpaceSciML.jl","title":"How StateSpaceSciML.jl works","text":"","category":"section"},{"location":"","page":"StateSpaceSciML.jl","title":"StateSpaceSciML.jl","text":"Describe loss function / fitting proceduce ","category":"page"},{"location":"","page":"StateSpaceSciML.jl","title":"StateSpaceSciML.jl","text":"Pages = [\"UniversalDiffEq.md\",\"Models.md\", \"ModelTesting.md\",\"MultipleTimeSeries.md\",\"NutsAndBolts.md\"]","category":"page"},{"location":"Models/#Model-Constructors","page":"Model Constructors","title":"Model Constructors","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"StateSpaceSciML provides a set of functions to construct NODE and UDE with varying levels of customization. ","category":"page"},{"location":"Models/#NODES-and-NNDE","page":"Model Constructors","title":"NODES and NNDE","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The simplest models to implement are the fully nonparametrics neural ordinary differential equation (NODE) and neural newtork difference equation (NNDE). These functions use a neural network to represent the right hand side of a system of differential equations and differnce equation respectively","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"   fracdxdt = NN(xwb) \n   x_t+1 = NN(x_twb)","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The NODE function builds a NODE model for a user supplied data set and NNDE build ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"StateSpaceSciML.NODE(data;kwargs ... )\n","category":"page"},{"location":"Models/#StateSpaceSciML.NODE-Tuple{Any}","page":"Model Constructors","title":"StateSpaceSciML.NODE","text":"NODE(data;kwargs ... )\n\nConstructs a nonparametric continuous time model for the data set data using a single layer neural network to represent the systems dynamics. \n\nModel equations\n\n    dxdt = NN(xwb)\n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point.\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"Covariates can be added to the model by supplying a second data frame X with thier values at differnt points in time. The value of the covaritates are appended to the state vector x to create the input for the neural network","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"   fracdxdt = NN(xX(t)wb) \n   x_t+1 = NN(x_tX_twb)","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The NODE models use a linear interpolation to approximate the value fo the covarites between observations. odel with covariates have not been developed for the discrete time case yet.  ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"StateSpaceSciML.NODE(data,X;kwargs ... )","category":"page"},{"location":"Models/#StateSpaceSciML.NODE-Tuple{Any, Any}","page":"Model Constructors","title":"StateSpaceSciML.NODE","text":"NODE(data,X;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the derivs function must have the form derivs!(du,u,x,p,t) where x is a vector with the value of the coarates at time t.     \n\n\n\n\n\n","category":"method"},{"location":"Models/#UDEs","page":"Model Constructors","title":"UDEs","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"The CustomDerivatives and CustomDifference function can be used to build models that combine nerual networks and known functional forms. These function take user defined models and consturct a loss function and provide access to the model fitting and testing functions provided by StateSpaceSciML.jl","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"StateSpaceSciML.CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )\nStateSpaceSciML.CustomDiffernce(data,step,initial_parameters;kwrags...)","category":"page"},{"location":"Models/#StateSpaceSciML.CustomDerivatives-Tuple{Any, Any, Any}","page":"Model Constructors","title":"StateSpaceSciML.CustomDerivatives","text":"CustomDerivatives(data,derivs!,initial_parameters;kwargs ... )\n\nConstructs a UDE model for the data set data  based on user defined derivitivs derivs. An initial guess of model parameters are supplied with the initia_parameters argument. \n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nderivs: a Function of the form derivs!(du,u,p,t) where u is the value of the state variables, p are the model parameters, t is time, and du is updated with the value of the derivitives\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/#StateSpaceSciML.CustomDiffernce-Tuple{Any, Any, Any}","page":"Model Constructors","title":"StateSpaceSciML.CustomDiffernce","text":"CustomDiffernce(data,step,initial_parameters;kwrags...)\n\nConstructs a UDE model for the data set data based on user defined difference equation step. An initial guess of model parameters are supplied with the initia_parameters argument.\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \nstep: a Function of the form step(u,t,p) where u is the value of the state variables, p are the model parameters.\ninit_parameters: A NamedTuple with the model parameters. Neural network parameters must be listed under the key NN.\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/#Adding-Covariates","page":"Model Constructors","title":"Adding Covariates","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"In this context the ","category":"page"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"StateSpaceSciML.CustomDerivatives(data,X,derivs!,initial_parameters;kwargs ... )\nStateSpaceSciML.CustomDiffernce(data,X,step,initial_parameters;kwargs ... )","category":"page"},{"location":"Models/#StateSpaceSciML.CustomDerivatives-NTuple{4, Any}","page":"Model Constructors","title":"StateSpaceSciML.CustomDerivatives","text":"CustomDerivatives(data,X,derivs!,initial_parameters;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the derivs function must have the form derivs!(du,u,x,p,t) where x is a vector with the value of the coarates at time t. \n\n\n\n\n\n","category":"method"},{"location":"Models/#StateSpaceSciML.CustomDiffernce-NTuple{4, Any}","page":"Model Constructors","title":"StateSpaceSciML.CustomDiffernce","text":"CustomDiffernce(data,X,step,initial_parameters;kwargs ... )\n\nWhen a dataframe X is supplied the model will run with covariates. the argumetn X should have a column for time t with the vlaue fo time in the remaining columns. The values in X will be interpolated with a linear spline for value of time not included int he data frame. \n\nWhen X is provided the step function must have the form step(u,x,t,p) where x is a vector with the value of the coarates at time t. \n\n\n\n\n\n","category":"method"},{"location":"Models/#Other-functions","page":"Model Constructors","title":"Other functions","text":"","category":"section"},{"location":"Models/","page":"Model Constructors","title":"Model Constructors","text":"StateSpaceSciML.NNDE(data;kwargs ...)\nStateSpaceSciML.DiscreteUDE(data,step,init_parameters;kwargs ...)\n\nStateSpaceSciML.UDE(data,derivs,init_parameters;kwargs...)","category":"page"},{"location":"Models/#StateSpaceSciML.NNDE-Tuple{Any}","page":"Model Constructors","title":"StateSpaceSciML.NNDE","text":"NNDE(data;kwargs ...)\n\nConstructs a nonparametric discrete time model for the data set data using a single layer neural network to reporesent the systems dynamics. \n\nModel equations\n\nx_t+1 = NN(x_twb)\n\n...\n\nArguments\n\ndata: a DataFrame object with the time of observations in a column labeled t and the remaining columns the value of the state variables at each time point. \n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/#StateSpaceSciML.DiscreteUDE-Tuple{Any, Any, Any}","page":"Model Constructors","title":"StateSpaceSciML.DiscreteUDE","text":"DiscreteUDE(data,step,init_parameters;kwargs ...)\n\nConstructs an additive UDE model with user supplied difference equations step and a single layer neural network. When init_parameters are provided for the use supplied function their values will be estiated in the training process.  \n\nModel equaitons\n\nx_t+1 = f(x_t\theta) + NN(x_twb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"},{"location":"Models/#StateSpaceSciML.UDE-Tuple{Any, Any, Any}","page":"Model Constructors","title":"StateSpaceSciML.UDE","text":"UDE(data,derivs,init_parameters;kwargs...)\n\nConstructs an additive continuous time UDE model with user supplied derivitives step and a single layer neural network. When init_parameters are provided for the user supplied function their values will be estiated during model training. \n\nModel equaitons\n\ndxdt = = f(x\theta) + NN(xwb)\n\n...\n\nKey word arguments\n\nproc_weight=1.0 : Weight given to the model predictiosn in loss funciton\nobs_weight=1.0 : Weight given to the state estiamtes in loss function \nreg_weight=10^-6 : Weight given to regularization in the loss function \nextrap_rho=0.0 : Asymthotic value of derivitives when extrapolating (negative when extrapolating higher than past observaitons, postive when extrapolating lower)\nl=0.25 : rate at which extrapolations converge on asymthotic behavior\n\n...\n\n\n\n\n\n","category":"method"}]
}