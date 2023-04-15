import { useEffect, useState } from 'react'

//Styles
import { Wrap } from './styles'

//Assets
import Clear from '../../../../public/clear.svg'
import HeavyRain from '../../../../public/heavy_rain.svg'
import Overcast from '../../../../public/overcast.svg'
import RainA from '../../../../public/rain_sun.svg'
import RainB from '../../../../public/rain.svg'

const Icon = ( props ) => {
  const [ variation, setVariation ] = useState()
  const [ size, setSize ] = useState()

  useEffect(()=>{
    switch( props.variation ){
      case 'Clear' : setVariation( Clear )
        break;
      case 'Overcast', 'Partly cloudy' : setVariation( Overcast )
        break;
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