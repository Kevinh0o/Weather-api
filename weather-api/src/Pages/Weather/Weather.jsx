import { useParams } from "react-router-dom";

// Hooks
import useFetch from "../../Hooks/useFetch";

// Styles

const Weather = () => {
  const params = useParams()
  //const weather = useFetch( 'forecast.json?', params.id, '&days=7&aqi=no&alerts=no' ) // tempo de 7 dias, sem qualidade do ar, sem alertas

  return (
    <div>
        { params.id }
    </div>
  )
}

export default Weather