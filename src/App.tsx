import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import { useState, useEffect } from 'react'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { useLocation } from 'react-router-dom'


function App() {
    const location = useLocation()
    const [showFooter, setShowFooter] = useState<boolean>(false)

    useEffect(() => {
        setShowFooter(false)

        const timer = setTimeout(() => {
            setShowFooter(true)
        }, 1000)

        return () => clearTimeout(timer)

    }, [location.pathname])

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        </div>
    )
}

export default App