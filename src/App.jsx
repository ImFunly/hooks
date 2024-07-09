import React from 'react';
import useCustomHook from './hooks/useCustomHook';

const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
const urlRick = 'https://rickandmortyapi.com/api/character/1';

const App = () => {
  const { data: pokemonData, loading: pokemonLoading, error: pokemonError } = useCustomHook(urlPokemon);
  const { data: rickData, loading: rickLoading, error: rickError } = useCustomHook(urlRick);

  if (pokemonLoading || rickLoading) return <p>Cargando..</p>;
  if (pokemonError) return <p>Error al cargar el Pokemon: {pokemonError.message}</p>;
  if (rickError) return <p>Error al cargar Rick and Morty: {rickError.message}</p>;

  return (
    <div>
      <h2>Personaje Pokemon</h2>
      {pokemonData && (
        <>
          <p>{pokemonData.name}</p>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
        </>
      )}

      <h2>Personaje Rick and Morty</h2>
      {rickData && (
        <>
          <p>{rickData.name}</p>
          <img src={rickData.image} alt={rickData.name} />
        </>
      )}
    </div>
  );
};

export default App;
