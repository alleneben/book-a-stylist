import { useEffect } from 'react';
import useSWR from 'swr';

import fetcher from './fetcher';
import useAppContext from '../api/appcontext';

const useApi = (gql) => {
    const { data, error } = useSWR(gql, fetcher);

    const { dispatch } = useAppContext();
    
    
    useEffect(() => {
        
        if(error) return dispatch({type:'ERROR', error: error});

        if(data) return dispatch({type:'FINISHED_LOADING', data: data})
        
    }, [data, error]);
 

    return { data, error }
}

export default useApi;