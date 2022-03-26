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
      default:
         return state;
   }
};
