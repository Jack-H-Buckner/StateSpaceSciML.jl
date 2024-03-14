push!(LOAD_PATH,"../src/")
import Pkg; Pkg.add("Pkg")
using StateSpaceSciML
using Test

@testset "StateSpaceSciML.jl" begin
    include("tests.jl")
end
