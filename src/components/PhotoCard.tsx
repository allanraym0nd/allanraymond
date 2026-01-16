import { motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface PhotoCardProps {
    image: string,
    date: string,
    location: string,
    caption: string,
    isMobile: boolean
}

const PhotoCard = ({ image, date, location, caption, isMobile }: PhotoCardProps) => {
    const [isFlipped, setIsFlipped] = useState(false)
    const { currentTheme } = useTheme()

    const handleMouseEnter = () => {
        if (!isMobile) {
            setIsFlipped(true)
        }
    }

    const handleMouseLeave = () => {
        if (!isMobile) {
            setIsFlipped(false)
        }
    }

    return (
        <></>
    )
}