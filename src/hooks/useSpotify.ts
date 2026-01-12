import { useState, useEffect } from "react";
import { useSpotifyAuth } from "./useSpotifyAuth";
import axios from 'axios'

export function useSpotify() {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null)
    const [recentTracks, setRecentTracks] = useState<Track[]>([])
    const [topTracks, setTopTracks] = useState<Track[]>([])
    const { token } = useSpotifyAuth()


    useEffect(() => {
        if (!token) return

        const fetchCurrentTrack = async () => {
            try {
                const track = await axios.get('', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
            } catch (error) {
                console.error(error)
            }
        }

    }, [])
}