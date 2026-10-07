import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import PartsManager from './Pages/PartsManager'
import DealershipManager from './Pages/DealershipManager'
import Layout from './Pages/Layout'
import './App.css'
import EmployeeManager from './Pages/EmployeeManager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={'vehicles'} Component={DealershipManager}/>
          <Route path={'employees'} Component={EmployeeManager}/>
          <Route path={'login'} Component={Login}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
