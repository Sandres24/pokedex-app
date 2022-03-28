export const reducerActions = {
   isLoading: 'IS_LOADING',
   successFetch: 'SUCCESS_FETCH',
   failedFetch: 'FAILED_FETCH',
};

export const isLoading = (loading) => ({
   type: reducerActions.isLoading,
   payload: loading,
});

export const successFetch = (data) => ({
   type: reducerActions.successFetch,
   payload: data,
});

export const failedFetch = (error) => ({
   type: reducerActions.failedFetch,
   payload: error,
});
