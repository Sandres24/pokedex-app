import { setUsername } from '../../../redux/actions';

const initialUserValues = {
   username: '',
};

const validateUser = (values) => {
   let errors = {};
   if (!values.username.trim())
      errors.username = 'Trainer name required to continue';
   return errors;
};

const onSubmitUser = (values, dispath, navigate) => {
   dispath(setUsername(values.username));
   navigate('/pokedex');
};

export const userValidation = () => ({
   name: 'username',
   button: 'Start',
   placeholder: 'Type your name...',
   initialValues: initialUserValues,
   validate: validateUser,
   onSubmit: onSubmitUser,
});
