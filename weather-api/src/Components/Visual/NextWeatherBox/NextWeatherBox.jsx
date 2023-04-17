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
        <div className='max-temp'>
        <p>{props.maxTemp}°</p>
        </div>
        <div className='min-temp'>
        <p>{props.minTemp}°</p>
        </div>
        <div className='day'> 
          <p>{ dayOfWeek }</p>
        </div>
      </Body>

    </Wrap>
  )
}

export default NextWeatherBox