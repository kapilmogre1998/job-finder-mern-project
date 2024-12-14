import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App