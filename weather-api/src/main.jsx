import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BrowserRouter  from 'react-router-dom'

//Styles
import GlobalStyle from './global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
