//Router
import { Routes, Route} from 'react-router-dom'

//Components
import SearchBar from "./Components/SearchBar/SearchBar"

//Pages
import Main from './Pages/Main/Main'
import NoPage from './Pages/NoPage/NoPage'
import Weather from './Pages/Weather/Weather'

//Styles
import { Wrap } from './styles'

function App() {

  return (
    <Wrap>
      <SearchBar />
            <Routes>
              <Route path='/' element={ <Main /> } />
              <Route path='/weather/:id' element={ <Weather /> } />
              <Route path='/*' element={ <NoPage /> } />
            </Routes>
    </Wrap>
  )
}

export default App
