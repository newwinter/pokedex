function NavBar({ pokemonIndex, setPokemonIndex }) {
  const handleClickNext = () => setPokemonIndex(pokemonIndex + 1);

  const handleClickBack = () => setPokemonIndex(pokemonIndex - 1);

  return (
    <div>
      <button onClick={handleClickBack}>back</button>
      <button onClick={handleClickNext}>next</button>
    </div>
  );
}

export default NavBar;
