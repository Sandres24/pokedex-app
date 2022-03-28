import { reducerActions } from '../actions';

export const initialFetchState = {
   data: null,
   isLoading: false,
   err: null,
};

export const useFetchReducer = (state, action) => {
   switch (action.type) {
      case reducerActions.isLoading:
         return {
            ...state,
            isLoading: action.payload,
         };

      case reducerActions.successFetch:
         return {
            data: action.payload,
            isLoading: false,
            err: {
               error: false,
            },
         };

      case reducerActions.failedFetch:
         return {
            ...state,
            isLoading: false,
            err: {
               error: true,
               errorName: action.payload.name,
               status: action.payload.status || '00',
               statusText: action.payload.statusText || 'An error has ocurred!',
            },
         };

      default:
         return state;
   }
};
