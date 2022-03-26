import { initialAppSettings } from '../../config';

export const actions = {
   setUsername: 'SET_USERNAME',
   exit: 'EXIT',
};

export const exit = () => ({
   type: actions.exit,
   payload: initialAppSettings,
});

export const setUsername = (username) => ({
   type: actions.setUsername,
   payload: username,
});
