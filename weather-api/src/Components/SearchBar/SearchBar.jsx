import { useEffect, useState } from 'react'

//Routes
import { Link } from 'react-router-dom'

//Styles
import { Wrap } from './styles'

//Animations
import { motion } from "framer-motion"

const SearchBar = ( props ) => {
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
    <Wrap onMouseLeave={ VisibilityOff }>

        <input
        placeholder='Search'
        onChange={ handleChange }
        onFocus={ VisibilityOn }
        onClick={ VisibilityOn }
        >
        </input>

        <div>
            { isVisible && (
                <motion.ul 
                    initial={{
                        y: 2,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                >
                    { data &&  data.map(a =>{
                        return(
                            <motion.li
                                key={a.id}
                                initial={{
                                    y: 0,
                                    opacity: 0
                                }}
                                transition={{ delay: 0.1}}
                                animate={{
                                    y: 2,
                                    opacity: 1
                                }}
                            >
                                <Link to={'/weather/' + a.name} onClick={ VisibilityOff }>
                                    {a.name}
                                </Link>

                                <p>
                                    {a.country}
                                </p>
                            </motion.li>
                        )
                    })}
                </motion.ul>
            )}
        </div>
    </Wrap>
  )
}

export default SearchBar