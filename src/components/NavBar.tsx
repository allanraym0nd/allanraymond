import { Link, useLocation } from "react-router-dom"
import { motion } from 'framer-motion'
import { useTheme } from "../context/ThemeContext"
import { useEffect, useState } from "react"
import { theme } from "../styles/theme"

const Navbar = () => {
    const { isDarkMode, currentTheme, toggleTheme } = useTheme()
    const location = useLocation()
    const [activeTab, setActiveTab] = useState(location.pathname)

    useEffect(() => {
        setActiveTab(location.pathname)
    }, [location])

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/contact', label: 'Contact' }

    ]

    return (
        <header>
            <nav>
                <div>
                    {/* Added logo/icon */}
                    <Link>
                        <img src="" alt="" />
                    </Link>

                    <div>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}

                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                    <button>

                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;
