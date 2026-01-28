import { useState, useEffect, useRef } from 'react';
import { useSpotify } from '../hooks/useSpotifyMock'; // or your mock hook
import SpotifyEmbed from './SpotifyEmbed'; // NEW
import FadeIn from '../utils/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

type TrackListType = 'recent' | 'top';

const SpotifyPlaying = () => {
    const { currentTrack, recentTracks, topTracks } = useSpotify();
    const [activeList, setActiveList] = useState<TrackListType>('recent');
    const [displayTrack, setDisplayTrack] = useState<any>(null);
    const [tracksList, setTracksList] = useState<any[]>([]);
    const { currentTheme } = useTheme();
    const tracksRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (currentTrack) {
            setDisplayTrack(currentTrack);
            if (activeList === 'top') {
                setTracksList(topTracks.slice(0, 4));
            } else {
                setTracksList(recentTracks.slice(0, 4));
            }
        } else {
            if (activeList === 'top') {
                setDisplayTrack(topTracks[0]);
                setTracksList(topTracks.slice(1));
            } else {
                setDisplayTrack(recentTracks[0]);
                setTracksList(recentTracks.slice(1, 5));
            }
        }
    }, [activeList, currentTrack, recentTracks, topTracks]);

    const handleTabClick = (type: TrackListType) => {
        setActiveList(type);

        if (tracksRef.current) {
            const rect = tracksRef.current.getBoundingClientRect();
            const isFullyVisible = (
                rect.top >= 0 &&
                rect.bottom <= window.innerHeight
            );

            if (!isFullyVisible) {
                tracksRef.current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }
        }
    };

    const TabButtons = () => (
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
    );

    const getTitle = () => {
        if (currentTrack) return 'Now Playing';
        return activeList === 'top' ? '#1 Track This Month' : 'Recently Played';
    };

    return (
        <div className="w-full">
            <div className={`mb-4 ${displayTrack ? 'hidden sm:block' : 'block'}`}>
                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">{getTitle()}</h2>
                    <TabButtons />
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:gap-4">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    {displayTrack && (
                        <div className="mb-4 sm:hidden">
                            <h2 className="text-lg font-semibold">{getTitle()}</h2>
                        </div>
                    )}

                    <AnimatePresence mode="sync">
                        <motion.div
                            key={displayTrack?.spotifyUrl}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {displayTrack && (
                                <>
                                    <SpotifyEmbed
                                        wide
                                        link={displayTrack.spotifyUrl}
                                        className="w-full sm:hidden"
                                    />
                                    <SpotifyEmbed
                                        link={displayTrack.spotifyUrl}
                                        className="hidden sm:block w-full"
                                    />
                                </>
                            )}
                        </motion.div>
                    </AnimatePresence>

                    {displayTrack && (
                        <div className="mt-4 sm:hidden">
                            <TabButtons />
                        </div>
                    )}
                </div>

                <div ref={tracksRef} className="w-full md:w-1/2">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeList}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="grid gap-3">
                                {tracksList.map((track, index) => (
                                    <FadeIn key={index} delay={1 + index * 0.3}>
                                        <SpotifyEmbed
                                            wide
                                            link={track.spotifyUrl}
                                            className="w-full"
                                        />
                                    </FadeIn>
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default SpotifyPlaying;