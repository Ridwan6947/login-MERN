import { useState } from 'react'
import Home from '../pages/home'
import './App.css'
import React from 'react'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Create from '../pages/create'





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Home />}></Route>
        <Route path='/register' element={<Create/>}></Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
