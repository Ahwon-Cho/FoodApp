import { useEffect, useState } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [ results, setResults ] = useState ([]);
    const [ errorMessage, setErrorMessage] = useState ('')

    const searchApi = async (searchTerm) => {
        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term : searchTerm,
                location: 'seattle'
            }
        });
        setResults(response.data.businesses)
    } catch (err) {
        setErrorMessage ('seomthign went wrong')
    }
    };

// call searchAPi when compoenet
// is first render
useEffect(() => {
    searchApi('pasta');
}, []);

return [searchApi, results, errorMessage];
};