import { actions } from '../actions';

export const rootReducer = (state, action) => {
   switch (action.type) {
      case actions.setUsername:
         return {
            ...state,
            username: action.payload,
         };
      case actions.exit:
         return {
            ...action.payload,
         };
      case actions.changeTheme:
         return {
            ...state,
            theme: action.payload,
         };
      case actions.changeElementsPerPage:
         return {
            ...state,
            elementsPerPage: action.payload,
         };
      default:
         return state;
   }
};
