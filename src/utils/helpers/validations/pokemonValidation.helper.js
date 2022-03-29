import { toLowerCase } from '../textFormat/toLowerCase.helpers';

const initialValues = {
   pokemon: '',
};

const validate = (values, data) => {
   let errors = {};
   const pokemon = data.results.filter(
      (pokemon) =>
         toLowerCase(pokemon.name).trim() === toLowerCase(values.pokemon).trim()
   );
   if (pokemon.length === 0)
      errors.pokemon = 'There are no pokemons with that name';

   return errors;
};

const onSubmit = (values, dispatch, navigate, data) => {
   const pokemon = data.results.filter(
      (pokemon) =>
         toLowerCase(pokemon.name).trim() === toLowerCase(values.pokemon).trim()
   );
   if (pokemon.length === 0) return;
   navigate(`/pokedex/${pokemon[0].name}`);
};

export const pokemonValidation = (data) => ({
   name: 'pokemon',
   button: 'Search',
   placeholder: 'Type the pokemon name...',
   initialValues,
   validate,
   onSubmit,
   data,
});
