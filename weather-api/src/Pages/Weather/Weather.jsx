import { useParams } from "react-router-dom";

// Hooks
import useFetch from "../../Hooks/useFetch";

//Components
import CurrentWeahterBox from '../../Components/Visual/CurrentWeahterBox/CurrentWeahterBox'

// Styles
import { Wrap } from './styles'

const Weather = () => {
  const params = useParams()
  //const weather = useFetch( 'forecast.json?', params.id, '&days=7&aqi=no&alerts=no' ) // tempo de 7 dias, sem qualidade do ar, sem alertas

  return (
    <Wrap>
        { params.id }
        <CurrentWeahterBox />
    </Wrap>
  )
}

export default Weather