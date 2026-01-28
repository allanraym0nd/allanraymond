import { useState, useEffect } from "react";

interface Track {
    id: string
    name: string
    album: string
    artist: string
    albumImageUrl: string
    spotifyUrl: string
}

// Mock data with real Spotify track URLs
const MOCK_TRACKS: Track[] = [
    {
        id: "1",
        name: "Blinding Lights",
        artist: "The Weeknd",
        album: "After Hours",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
        spotifyUrl: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b"
    },
    {
        id: "2",
        name: "Save Your Tears",
        artist: "The Weeknd",
        album: "After Hours",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
        spotifyUrl: "https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g"
    },
    {
        id: "3",
        name: "Levitating",
        artist: "Dua Lipa",
        album: "Future Nostalgia",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        spotifyUrl: "https://open.spotify.com/track/39LLxExYz6ewLAcYrzQQyP"
    },
    {
        id: "4",
        name: "good 4 u",
        artist: "Olivia Rodrigo",
        album: "SOUR",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273a91c10fe9472d9bd89802e5a",
        spotifyUrl: "https://open.spotify.com/track/4ZtFanR9U6ndgddUvNcjcG"
    },
    {
        id: "5",
        name: "As It Was",
        artist: "Harry Styles",
        album: "Harry's House",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b2732e8ed79e177ff6011076f5f0",
        spotifyUrl: "https://open.spotify.com/track/4Dvkj6JhhA12EX05fT7y2e"
    },
    {
        id: "6",
        name: "Heat Waves",
        artist: "Glass Animals",
        album: "Dreamland",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b27369c87aeab86bb58e7e653dc1",
        spotifyUrl: "https://open.spotify.com/track/02MWAaffLxlfxAUY7c5dvx"
    },
    {
        id: "7",
        name: "Peaches",
        artist: "Justin Bieber",
        album: "Justice",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273e6f407c7f3a0ec98845e4431",
        spotifyUrl: "https://open.spotify.com/track/4iJyoBOLtHqaGxP12qzhQI"
    },
    {
        id: "8",
        name: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        album: "Stay",
        albumImageUrl: "https://i.scdn.co/image/ab67616d0000b273c8b444df094279e70d0ed856",
        spotifyUrl: "https://open.spotify.com/track/5PjdY0CKGZdEuoNab3yDmX"
    }
];

export function useSpotify() {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [recentTracks, setRecentTracks] = useState<Track[]>([]);
    const [topTracks, setTopTracks] = useState<Track[]>([]);

    useEffect(() => {
        // Simulate currently playing track
        setCurrentTrack(MOCK_TRACKS[0]);

        // Simulate recent tracks
        setRecentTracks(MOCK_TRACKS.slice(1, 6));

        // Simulate top tracks
        setTopTracks([MOCK_TRACKS[0], ...MOCK_TRACKS.slice(3, 7)]);
    }, []);

    return {
        currentTrack,
        recentTracks,
        topTracks
    };
}