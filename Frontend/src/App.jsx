import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import JobListing from './Components/JobListing/JobListing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<JobListing />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App