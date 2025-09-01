export default function MusicEmbed() {
  return (
    <div className="fixed bottom-6 right-6 z-50 bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-2 flex items-center gap-2">
      {/* Replace with your playlist/video embed */}
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M?utm_source=generator"
        width="200"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
        loading="lazy"
        className="rounded-xl border-none"
        title="Spotify Playlist"
      ></iframe>
      <span className="text-xs text-neutral-500 dark:text-neutral-400">Vibe</span>
    </div>
  );
}
