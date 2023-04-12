import { useState } from "react"

const useFetch = (method, city, aditionalInfo) => {
    const [ data, setData ] = useState()
    const [ error, setError ] = useState()

    const baseUrl = 'http://api.weatherapi.com/v1/'
    const key = 'key=34f5d0c181ad438da72130319232103&q='

    useState(()=>{
        fetch( baseUrl + method + key + city + aditionalInfo )
        .then( response => response.json() )
        .then( json => setData(json) )
        .catch( err => setError(err) )
    }, [] )
    
    return(
        data
    )
}

export default useFetch