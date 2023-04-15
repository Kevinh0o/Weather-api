import { useState, useEffect } from "react"

const useFetch = (method, city, aditionalInfo) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()
    const [ loading, setLoading ] = useState(false)

    const baseUrl = 'http://api.weatherapi.com/v1/'
    const key = 'key=34f5d0c181ad438da72130319232103&q='

    useEffect(()=>{
        setLoading(false)
        fetch( baseUrl + method + key + city + aditionalInfo )
        .then( response => response.json() )
        .then( json => setData(json), setLoading(true))
        .catch( err => setError(err) )
    }, [ city ] )
    
    return{
        data, loading, error
    }
}

export default useFetch