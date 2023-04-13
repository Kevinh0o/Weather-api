//Styles
import { Wrap, Header, Body, Title, ScrollX } from './styles'

//Components
import WeatherDuringDay from '../WeatherDuringDay/WeatherDuringDay'

const CurrentWeahterBox = () => {
  return (
    <Wrap>
      <Header>
        
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