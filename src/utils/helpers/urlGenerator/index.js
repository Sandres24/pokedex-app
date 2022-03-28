export const GETBY = {
   pokemons: 'POKEMONS',
   pokemon: 'POKEMON',
   pokemonTypes: 'POKEMON_TYPES',
};

export const getPokemons = () => ({ type: GETBY.pokemons });

export const getByPokemon = (pokemon) => ({
   type: GETBY.pokemon,
   payload: pokemon,
});

export const getByPokemonTypes = (type) => ({
   type: GETBY.pokemonTypes,
   payload: type,
});
