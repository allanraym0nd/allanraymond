declare namespace global {
    interface Window {
        Spotify: any,
        onSpotifyWebPlaybackSDKReady: () => void
    }
}

export interface SpotifyTrack {
    name: string
    artist: string
    album: string
    albumImageUrl: string
}

export interface galleryImage {
    id: string
    src: string
    caption: string
    alt: string
}
