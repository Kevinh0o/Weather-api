//Styles
import { Wrap, Header, Body, IconContainer } from './styles'

//Components
import Icon from '../Icon/Icon'

const NextWeatherBox = ( props ) => {
  const date = new Date(props.day)
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayOfWeek = daysOfWeek[date.getDay()];

  return (
    <Wrap>
      <Header>
        <IconContainer>
          <Icon
            size={'medium'}
            variation={'Clear'}
          />
        </IconContainer>
      </Header>
      <Body>
        <p> {props.maxTemp} </p>
        <p> {props.minTemp} </p>
        <p> { dayOfWeek } </p>
      </Body>

    </Wrap>
  )
}

export default NextWeatherBox