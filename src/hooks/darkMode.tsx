import { useState, useEffect } from 'react'

export default function useDarkMode() {
    const localMode = localStorage.getItem('mode')|| ''
    const [ darkMode, setDarkMode ] = useState<string>(localMode)
    useEffect(() => {
        localStorage.setItem('mode', darkMode)
    } ,[darkMode])

    useEffect(() => {
        setDarkMode(localMode)
    } ,[])

    function switchMode() {
        setDarkMode(darkMode?"":"dark")
    }

  return [darkMode, switchMode]
}