import { useEffect, useState } from 'react'

//Styles
import { Wrap } from './styles'

//Assets
import Clear from '/public/clear.png'
import HeavyRain from '/heavy_rain.png'
import Overcast from '/overcast.png'
import LightRain from '/light_rain.png'
import RainB from '/rain.png'

const Icon = ( props ) => {
  const [ variation, setVariation ] = useState()
  const [ size, setSize ] = useState()

  useEffect(()=>{
    switch( props.variation ){
      case 'Clear' : setVariation( Clear )
        break;
      case 'Overcast' : setVariation( Overcast )
        break;
      case 'Partly cloudy' : setVariation( Overcast )
        break;
      case 'Mist' : setVariation( Overcast )
        break;
      case 'Patchy light drizzle' : setVariation( Overcast )
        break;
      case 'Cloudy' : setVariation( Overcast )
        break;
      case 'Light rain shower' : setVariation( LightRain )
        break;
      case 'Patchy rain possible' : setVariation( LightRain )
        break;
      default : setVariation( Clear )
    }

    switch( props.size ){
      case 'big' : setSize( { width: '150px' } )
        break;
      case 'medium' : setSize( { width: '70px' } )
        break;
      case 'small' : setSize( { width: '30px' } )
        break;
    }

  }, [ props.variation ])

  return (
    <Wrap>

      <img
      src={ variation }
      style={size}
      />

    </Wrap>
  )
}

export default Icon