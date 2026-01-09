import { useState, useEffect } from 'react'

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState<[number, number]>([0, 0])

  const extractWindowDimensions = (): [number, number] => {
    const { innerWidth: width, innerHeight: height } = window

    return [width, height]
  }

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions(extractWindowDimensions())
    }

    window.addEventListener('resize', updateWindowDimensions)
    updateWindowDimensions()
    return () => window.removeEventListener('resize', updateWindowDimensions)
  }, [])
  
  return windowDimensions
}
