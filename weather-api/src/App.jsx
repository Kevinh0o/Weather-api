//Router
import { Routes, Route} from 'react-router-dom'

//Components
import SearchBar from "./Components/SearchBar/SearchBar"

//Pages
import Main from './Pages/Main/Main'
import NoPage from './Pages/NoPage/NoPage'
import Weather from './Pages/Weather/Weather'

function App() {

  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path='/' element={ <Main /> } />
        <Route path='/weather/:id' element={ <Weather /> } />
        <Route path='/*' element={ <NoPage /> } />
      </Routes>
    </div>
  )
}

export default App
