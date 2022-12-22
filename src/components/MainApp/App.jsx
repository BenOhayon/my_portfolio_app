import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import About from '../About/About'
import NavBar from '../NavBar/NavBar'

import './App.scss'

function App() {

  return (
    <>
      <NavBar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </>
  )
}

export default App