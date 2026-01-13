import { useState, useEffect, useRef } from "react";
import { useSpotify } from '../hooks/useSpotify';
import { Spotify } from 'react-spotify-embed'
import FadeIn from "../utils/FadeIn";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

type TrackListType = 'recent' | 'top'

const SpotifyPlaying = () => {
    const { currentTrack, recentTracks, topTracks } = useSpotify();
    const [activeList, setActiveList] = useState<TrackListType>('recent')
    const [displayTrack, setDisplayTrack] = useState(null)
    const [trackslist, setTracksList] = useState([])
    const { currentTheme } = useTheme()
    const tracksRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (currentTrack) {
            setDisplayTrack(currentTrack)
        } if {

        }

    }, [])
}






