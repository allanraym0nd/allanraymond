import { useState, useEffect, useRef } from "react";
import { useSpotify } from '../hooks/useSpotify';
import { Spotify } from 'react-spotify-embed'
import FadeIn from "../utils/FadeIn";
import { AnimatePresence, color, motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useSpotifyAuth } from "../hooks/useSpotifyAuth";

type TrackListType = 'recent' | 'top'

const SpotifyPlaying = () => {
    const { currentTrack, recentTracks, topTracks } = useSpotify();
    const [activeList, setActiveList] = useState<TrackListType>('recent')
    const [displayTrack, setDisplayTrack] = useState<any>(null)
    const [trackslist, setTracksList] = useState<any[]>([])
    const { currentTheme } = useTheme()
    const tracksRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (currentTrack) {
            setDisplayTrack(currentTrack)
            if (activeList === 'top') {
                setTracksList(topTracks.slice(0, 4))
            }
            else {
                setTracksList(recentTracks.slice(0, 4))
            }
        } else {

            if (activeList === "top") {
                setDisplayTrack(topTracks[0])
                setTracksList(topTracks.slice(1))

            } else {
                setDisplayTrack(recentTracks[0])
                setTracksList(recentTracks.slice(1, 5))
            }

        }

    }, [activeList, currentTrack, recentTracks, topTracks])

    const handleTabClick = (type: TrackListType) => {
        setActiveList(type)

        if (tracksRef.current) {
            const rect = tracksRef.current.getBoundingClientRect()
            const isFullyVisible = (
                rect.top >= 0 &&
                rect.bottom <= window.innerHeight

            )

            if (!isFullyVisible) {
                tracksRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'

                })
            }
        }

    }

    return (
        <div className="w-full">
            <div className={`mb-4 ${displayTrack ? 'hidden sm:block' : 'block'} `}>
                <div className="flex justify-between items-center">
                    <h2 className="text-large font-semibold">
                        {currentTrack ? 'Now Playing' : (activeList === 'top' ? '#1 Track this month' : 'Recently Played')}
                    </h2>
                    <div className="flex space-x-2">
                        <button
                            onClick={() => handleTabClick('recent')}
                            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${activeList === 'recent'
                                ? 'text-gray-900 dark:text-white font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            style={{
                                backgroundColor: activeList === 'recent' ? currentTheme.nav.bubble : 'transparent',
                                transition: 'background-color 0.2s ease-in-out'
                            }}

                        >
                            Recently Played
                        </button>
                        <button
                            onClick={() => handleTabClick('top')}
                            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${activeList === 'top'
                                ? 'text-gray-900 dark:text-white font-medium'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            style={{
                                backgroundColor: activeList === 'top' ? currentTheme.nav.bubble : 'transparent',
                                transition: 'background-color 0.2s ease-in-out'
                            }}
                        >
                            Top Tracks
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <h2>

                        </h2>
                    </div>
                    <AnimatePresence>
                        <div>
                            <div>
                                <div>
                                    <button>

                                    </button>
                                    <button>

                                    </button>
                                </div>
                            </div>

                        </div>
                    </AnimatePresence>
                </div>

                <div>
                    <AnimatePresence>
                        <div>
                            <div>
                                <FadeIn>
                                    <Spotify>

                                    </Spotify>
                                </FadeIn>
                            </div>

                        </div>

                    </AnimatePresence>
                </div>
            </div>


        </div>
    )
}

export default SpotifyPlaying;






