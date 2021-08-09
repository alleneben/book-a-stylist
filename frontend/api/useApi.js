import { useEffect, useState } from 'react';
import useAppContext from '../api/appcontext';

const useApi = (gql) => {
    const [errors, setErrors] = useState(false);
    const [data, setData] = useState([]);

    const { dispatch } = useAppContext();
    
    
    useEffect(async () => {
        let cancelRequest = false;
        
        const response = await fetchData(gql,'')
        
        const { data, errors } = response;

        if(errors){ 
            setErrors(errors)
            return dispatch({type:'ERROR', error: errors[0]});
        }

        if(data){
            setData(data)
            return dispatch({type:'FINISHED_LOADING', data: data})
        }


        return function cleanup() {
            cancelRequest = true;
        };
        
    }, []);


    async function fetchData(query, payload){
        let headers = { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.apiKey}`
        };
      
        let response = await fetch('http://localhost:4000/graphql', {
          method: "POST",
          headers: headers,
          body: JSON.stringify({query}),
        })
        
        response = await response.json()

        return response;
    }
 
    return { data, errors }
}

export default useApi;