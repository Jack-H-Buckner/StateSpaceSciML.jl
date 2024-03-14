# Test models

```@docs
StateSpaceSciML.plot_state_estiamtes(UDE::UDE)
StateSpaceSciML.print_parameter_estimates(UDE::UDE)
StateSpaceSciML.plot_predictions(UDE::UDE)
StateSpaceSciML.plot_predictions(UDE::UDE, test_data::DataFrame)
StateSpaceSciML.forecast(UDE::UDE, u0::AbstractVector{}, times::AbstractVector{})
StateSpaceSciML.plot_forecast(UDE::UDE, T::Int)
StateSpaceSciML.plot_forecast(UDE::UDE, test_data::DataFrame)
StateSpaceSciML.leave_future_out_cv(model; forecast_length = 10,  K = 10, spacing = 1, step_size = 0.05, maxiter = 500)
```