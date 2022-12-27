import { useRef, useEffect } from 'react'
import HomePage from '../HomePage/HomePage'
import NavBar from '../NavBar/NavBar'
import upArrow from '../../../assets/up-arrow.svg'

import './App.scss'

function App() {

  const mainDivRef = useRef()
  const slideToPageTopButtonRef = useRef()

  useEffect(() => {
    window.onscroll = function() {
      if (window.pageYOffset === 0) {
        slideToPageTopButtonRef.current.classList.add('hidden')
      } else {
        slideToPageTopButtonRef.current.classList.remove('hidden')
      }
    };

    return () => window.onscroll = null
  }, [])

  function scrollToPageTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div ref={mainDivRef}>
      <NavBar scrollToPageTop={scrollToPageTop} />
      <HomePage />
      <div ref={slideToPageTopButtonRef} onClick={scrollToPageTop} className="slide-to-page-top-button hidden">
        <img src={upArrow} alt='Go to page top' />
      </div>
    </div>
  )
}

export default App