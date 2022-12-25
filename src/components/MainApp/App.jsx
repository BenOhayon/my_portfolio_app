import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import NavBar from '../NavBar/NavBar'

import './App.scss'

function App() {

  return (
    <>
      <NavBar />
      <HomePage />
    </>
  )
}

export default App