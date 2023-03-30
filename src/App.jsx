import PokemonCard from "./components/PokemonCard";
import React, { useState } from "react";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

function App() {

const [pokemonIndex, setPokemonIndex] = useState(0); 

  const handleClickNext = () => (
    setPokemonIndex(pokemonIndex+1)
  )

  const handleClickBack = () => (
  setPokemonIndex(pokemonIndex-1)
  )

  return (
    <div>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button onClick={handleClickBack}>back</button>
      <button onClick={handleClickNext}>next</button>
    </div>
  )
}
export default App;
