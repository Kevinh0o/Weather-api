//Components
import WeatherDuringDay from '../WeatherDuringDay/WeatherDuringDay'
import Icon from '../Icon/Icon'

//Styles
import { Wrap, 
  Header, 
  Body, 
  Title, 
  ScrollX, 
  FlexContainer,
  TemperatureText,
  AditionalInfo
} from './styles'

const CurrentWeahterBox = ( props ) => {

  const date = new Date(props.weather.location.localtime)
  var hours = date.getHours()
  var minutes = date.getMinutes()

  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayOfWeek = daysOfWeek[date.getDay()];

  return (
    <Wrap>
      <Header>
        <FlexContainer>
          <Icon
          variation={props.weather.current.condition.text}
          size={'big'}
          />
          <TemperatureText>
            <h1>
              {props.weather.current.temp_c}
            </h1>
          </TemperatureText>
          <AditionalInfo>
            <p> { dayOfWeek } </p>
            <p> {props.weather.current.condition.text} </p>
            <p> { hours }:{ minutes } </p>
          </AditionalInfo>
        </FlexContainer>
      </Header>
      <Body>
        <Title>
          <h1> {props.weather.location.name} </h1>
          <p> {props.weather.location.region} </p>
          <p> {props.weather.location.country} </p>
        </Title>
        <ScrollX>
          <WeatherDuringDay />
        </ScrollX>
      </Body>
    </Wrap>
  )
}

export default CurrentWeahterBox