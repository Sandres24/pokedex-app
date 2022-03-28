import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { failedFetch, isLoading, successFetch } from '../actions';
import { initialFetchState, useFetchReducer } from '../reducers';

const useFetch = (url) => {
   const [fetchState, dispatch] = useReducer(
      useFetchReducer,
      initialFetchState
   );

   useEffect(() => {
      if (!url) return;

      let isMounted = true;

      if (isMounted) dispatch(isLoading(true));

      const controller = new AbortController();
      const signal = controller.signal;

      axios
         .get(url, { signal })
         .then((res) => {
            if (isMounted) dispatch(successFetch(res.data));
         })
         .catch((err) => {
            if (isMounted) dispatch(failedFetch(err));
         });

      return () => {
         isMounted = false;
         setTimeout(() => {
            controller.abort();
         }, 3000);
      };
   }, [url]);

   return {
      fetchState,
   };
};

export default useFetch;
