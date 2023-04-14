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

const CurrentWeahterBox = () => {
  return (
    <Wrap>
      <Header>
        <FlexContainer>
          <div className='WeatherIcon'>
            <img src={Icon} />
          </div>
          <TemperatureText>
            <h1> 
              23
            </h1>
          </TemperatureText>
          <AditionalInfo>
            <p> Dom </p>
            <p> Clear </p>
            <p> 12:00 AM </p>
          </AditionalInfo>
        </FlexContainer>
      </Header>
      <Body>
        <Title>
          <h1> Porto Alegre </h1>
          <p> Rio Grande do Sul </p>
          <p> Brazil </p>
        </Title>
        <ScrollX>
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
          <WeatherDuringDay />
        </ScrollX>
      </Body>
    </Wrap>
  )
}

export default CurrentWeahterBox