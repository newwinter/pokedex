function NavBar({ setPokemonIndex, pokemonList }) {
  const handleClickSet = (pokemonIndex) => {
    setPokemonIndex(pokemonIndex);
  };

  return (
    <div>
      {pokemonList.map((pokemon, pokemonIndex) => (
        <button key={pokemon.name} onClick={() => handleClickSet(pokemonIndex)}>
          {pokemon.name}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
