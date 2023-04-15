//Components
import WeatherDuringDay from '../WeatherDuringDay/WeatherDuringDay'

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

//Assets
import Icon from '../../../../public/clear.svg'

const CurrentWeahterBox = ( props ) => {

  return (
    <Wrap>
      <Header>
        <FlexContainer>
          <div className='WeatherIcon'>
            <img src={Icon} />
          </div>
          <TemperatureText>
            <h1>
              {props.weather.current.temp_c}
            </h1>
          </TemperatureText>
          <AditionalInfo>
            <p> Dom </p>
            <p> {props.weather.current.condition.text} </p>
            <p> 12:00 AM </p>
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