import { useEffect, useState } from 'react'

//Routes
import { Link } from 'react-router-dom'

//Styles
import { Wrap } from './styles'

const SearchBar = () => {
    const [ data, setData ] = useState([])
    const [ isVisible, setVisibility ] = useState(false)
    const url = 'http://api.weatherapi.com/v1/search.json?key=34f5d0c181ad438da72130319232103&q='

    console.log(data)

    async function fetchData(url){
        fetch(url)
            .then( response => response.json() )
            .then( json => setData(json) )
            .catch( err => console.log(err) )
    }

    function handleChange(e){
        if(e.target.value == ''){
            VisibilityOff()
        }
        else{
            VisibilityOn()
            fetchData(url + e.target.value)
        }
    }

    function VisibilityOff(){
        setVisibility(false)
    }
    function VisibilityOn(){
        setVisibility(true)
    }

  return (
    <Wrap>
        <input
        placeholder='Search'
        onChange={ handleChange }
        >
        </input>

        { isVisible && (
            <ul>
                { data &&  data.map(a =>{
                    return(
                        <li key={a.id}
                        onClick={ VisibilityOff }
                        >
                            <Link to={'/weather/' + a.name}>
                                {a.name}
                            </Link>

                            <p>
                                {a.country}
                            </p>
                        </li>
                    )
                })}
            </ul>
        )}
    </Wrap>
  )
}

export default SearchBar