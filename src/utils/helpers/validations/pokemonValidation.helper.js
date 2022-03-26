const initialValues = {
   pokemon: '',
};

const validate = (values) => {};

const onSubmit = (values, dispatch, navigate) => {};

export const pokemonValidation = () => ({
   name: 'pokemon',
   button: 'Search',
   placeholder: 'Type the pokemon name...',
   initialValues,
   validate,
   onSubmit,
});
