// src/components/SpotifyEmbed.tsx
interface SpotifyEmbedProps {
    link: string;
    wide?: boolean;
    className?: string;
}

const SpotifyEmbed = ({ link, wide = false, className = "" }: SpotifyEmbedProps) => {
    // Extract track ID from Spotify URL
    const getTrackId = (url: string) => {
        const match = url.match(/track\/([a-zA-Z0-9]+)/);
        return match ? match[1] : '';
    };

    const trackId = getTrackId(link);
    const height = wide ? 80 : 352; // Changed from 152 to 80 for compact cards

    return (
        <iframe
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
            width="100%"
            height={height}
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className={className}
        />
    );
};

export default SpotifyEmbed;