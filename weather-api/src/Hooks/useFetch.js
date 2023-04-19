import { useState, useEffect } from "react"

const useFetch = (method, city, aditionalInfo) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState(false)

    const baseUrl = 'https://api.weatherapi.com/v1/'
    const key = import.meta.env.VITE_REACT_APP_API_KEY

    useEffect(()=>{
        setLoading(false)
        fetch( baseUrl + method + 'key=' + key + '&q=' + city + aditionalInfo )
        .then( response => response.json() )
        .then( json => setData(json), setLoading(true))
        .catch( err => setError(err) )
    }, [ city ] )
    
    return{
        data, loading, error
    }
}

export default useFetch