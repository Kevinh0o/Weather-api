import { useEffect, useState } from 'react'

//Styles
import { Wrap, } from './styles'

//Assets
import Clear from '../../../../public/clear.svg'
import HeavyRain from '../../../../public/heavy_rain.svg'
import Overcast from '../../../../public/overcast.svg'
import RainA from '../../../../public/rain_sun.svg'
import RainB from '../../../../public/rain.svg'

const Icon = ( props ) => {
  const [ variation, setVariation ] = useState()

  useEffect(()=>{
    switch( props.variation ){
      case 'Clear', 'Partly sunny' : setVariation( Clear )
        break;
      case 'Overcast', 'Partly cloudy' : setVariation( Overcast )
        break;
    }
  }, [])

  return (
    <Wrap>
      <img src={ variation } />
    </Wrap>
  )
}

export default Icon