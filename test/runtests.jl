push!(LOAD_PATH,"../src/")
using StateSpaceSciML
import Pkg; Pkg.add("Test")
using Test

@testset "StateSpaceSciML.jl" begin
    include("tests.jl")
end
