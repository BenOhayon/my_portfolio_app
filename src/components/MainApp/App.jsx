import { useRef, useEffect, useState, createContext, useContext } from 'react'
import HomePage from '../HomePage/HomePage'
import NavBar from '../NavBar/NavBar'
import upArrow from '../../../assets/up-arrow.svg'

import './App.scss'
import { MOBILE_SCREEN_WIDTH_THRESHOLD_PX } from '../../constants/general.constants'

const AppContext = createContext()

export function useAppContext() {
	return useContext(AppContext)
}

function App() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_SCREEN_WIDTH_THRESHOLD_PX)

	const slideToPageTopButtonRef = useRef()
	const mobileNavBarMenuRef = useRef()
	const appRef = useRef()

	function closeNavBarMenu(e) {
		mobileNavBarMenuRef.current.classList.add('hide')
	}

	useEffect(() => {
		window.onscroll = function () {
			if (window.pageYOffset === 0) {
				slideToPageTopButtonRef.current.classList.add('hide')
			} else {
				slideToPageTopButtonRef.current.classList.remove('hide')
			}
		};

		if (appRef?.current) {
			const observer = new ResizeObserver(() => {
				setIsMobile(window.innerWidth < MOBILE_SCREEN_WIDTH_THRESHOLD_PX)
			})

			observer.observe(appRef?.current)

			return () => {
				observer.disconnect()
				window.onscroll = null
			}
		}

		return () => window.onscroll = null
	}, [])

	function scrollToPageTop() {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div ref={appRef}>
			<AppContext.Provider value={{ isMobile }}>
				<NavBar mobileNavBarMenuRef={mobileNavBarMenuRef} scrollToPageTop={scrollToPageTop} closeNavBarMenu={closeNavBarMenu} />
				<HomePage onClick={closeNavBarMenu} />
				<div ref={slideToPageTopButtonRef} onClick={scrollToPageTop} className="slide-to-page-top-button hide">
					<img src={upArrow} alt='Go to page top' />
				</div>
			</AppContext.Provider>
		</div>
	)
}

export default App