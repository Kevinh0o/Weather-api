//Components
import Icon from '../Icon/Icon'

//Styles
import { Wrap, IconContainer } from './styles'

const WeatherDuringDay = ( props ) => {
  const date = new Date(props.hour)
  var hours = date.getHours()

  return (
    <Wrap>

      <IconContainer>
        <Icon
          variation={props.condition.text}
          size={'medium'}
        />
      </IconContainer>

      <p> {props.temp}° </p>
      <p> {hours}:00 </p>
    </Wrap>
  )
}

export default WeatherDuringDay