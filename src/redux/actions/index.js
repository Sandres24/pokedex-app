import { initialAppSettings } from '../../config';

export const actions = {
   setUsername: 'SET_USERNAME',
   exit: 'EXIT',
   changeTheme: 'CHANGE_THEME',
   changeElementsPerPage: 'CHANGE_ELEMENTS_PER_PAGE',
};

export const exit = () => ({
   type: actions.exit,
   payload: initialAppSettings,
});

export const setUsername = (username) => ({
   type: actions.setUsername,
   payload: username,
});

export const changeTheme = (theme) => ({
   type: actions.changeTheme,
   payload: theme,
});

export const changeElementsPerPage = (elementsPerPage) => ({
   type: actions.changeElementsPerPage,
   payload: elementsPerPage,
});
