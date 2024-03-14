push!(LOAD_PATH,"../src/")
using StateSpaceSciML
using Test

@testset "StateSpaceSciML.jl" begin
    include("tests.jl")
end
