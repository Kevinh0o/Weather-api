import { useParams } from "react-router-dom";

// Hooks
import useFetch from "../../Hooks/useFetch";

//Components
import CurrentWeahterBox from '../../Components/Visual/CurrentWeahterBox/CurrentWeahterBox'
import NextWeatherBox from "../../Components/Visual/NextWeatherBox/NextWeatherBox";

// Styles
import { Wrap, FlexContainer } from './styles'

const Weather = () => {
  const params = useParams()
  const weather = useFetch( 'forecast.json?', params.id, '&days=7&aqi=no&alerts=no' ) // tempo de 7 dias, sem qualidade do ar, sem alertas
  console.log(weather)



  return (
    <Wrap>
        { weather.data != undefined &&
          <div>
            <CurrentWeahterBox weather={weather.data} />

            <FlexContainer>
              { weather.data.forecast.forecastday.map(a =>{
                return(
                  <NextWeatherBox
                  key={a.date}
                  day={a.date}
                  maxTemp={a.day.maxtemp_c}
                  minTemp={a.day.mintemp_c}
                  condition={a.day.condition.text}
                  />
                )
            })}
            </FlexContainer>
          </div>
        }
    </Wrap>
  )
}

export default Weather