push!(LOAD_PATH,"../src/")
using Pkg; Pkg.add("DataFrames")
using Documenter, StateSpaceSciML, DataFrames

makedocs(
    sitename="StateSpaceSciML.jl",
    modules  = [StateSpaceSciML],
    format   = Documenter.HTML(; prettyurls = get(ENV, "CI", nothing) == "true"),
    pages = ["index.md","Models.md","ModelTesting.md","NutsAndBolts.md","MultipleTimeSeries.md"]
)

deploydocs(
    repo = "github.com/Jack-H-Buckner/StateSpaceSciML.jl.git",
)