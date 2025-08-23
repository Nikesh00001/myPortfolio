import React from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import Routes from './routes/Routes'
import Home from './pages/Home';

const App = () => {
  function AppRoute(){
    return useRoutes(Routes);
  };
  return (
    <BrowserRouter>
    <AppRoute/>
      
    </BrowserRouter>
  )
}

export default App