//Components
import Icon from '../Icon/Icon'

//Styles
import { Wrap, Header, Body, IconContainer } from './styles'

//Animations
import { motion } from 'framer-motion'


const NextWeatherBox = ( props ) => {
  const date = new Date(props.day)
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var dayOfWeek = daysOfWeek[date.getUTCDay()];

  return (
    <Wrap as={ motion.div }
      initial={{
        y: 2,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
      delay: 0.3
      }}
    >
      <Header>
        <IconContainer>
          <Icon
            size={'medium'}
            variation={props.condition}
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