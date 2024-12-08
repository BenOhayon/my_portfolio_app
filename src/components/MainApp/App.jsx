import { useRef, useEffect, useState, createContext, useContext } from 'react'
import HomePage from '../HomePage/HomePage'
import NavBar from '../NavBar/NavBar'

import './App.scss'
import { MOBILE_SCREEN_WIDTH_THRESHOLD_PX } from '../../constants/general.constants'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RESUME_TYPE_KEY } from '../../constants/storage.constants'

const AppContext = createContext()

export function useAppContext() {
    return useContext(AppContext)
}

export default function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_SCREEN_WIDTH_THRESHOLD_PX)

    const mobileNavBarMenuRef = useRef()
    const appRef = useRef()

    const resumeType = localStorage.getItem(RESUME_TYPE_KEY) ?? 'fs'

    function closeNavBarMenu(e) {
        mobileNavBarMenuRef.current.classList.add('hide')
    }

    useEffect(() => {
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
                <Routes>
                    <Route
                        path='/:type'
                        element={<>
                            <NavBar mobileNavBarMenuRef={mobileNavBarMenuRef} scrollToPageTop={scrollToPageTop} closeNavBarMenu={closeNavBarMenu} />
                            <HomePage onClick={closeNavBarMenu} />
                        </>}
                    />

                    <Route
                        path='/*'
                        element={<Navigate to={`/${resumeType}`} />}
                    />
                </Routes>
            </AppContext.Provider>
        </div>
    )
}