type Item = { src: string; title?: string; ratio?: string; tag?: string };

export default function GalleryGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((it, i) => (
        <div
          key={i}
          className={`group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm ${
            it.ratio ?? "aspect-[3/2]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={it.src}
            alt={it.title ?? "photo"}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-full">{i + 1}</div>
          <a
            href={it.src}
            download
            className="absolute top-2 right-2 bg-white/80 hover:bg-white text-black text-xs px-2 py-1 rounded-full shadow transition"
            title="Download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
          {(it.title || it.tag) && (
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/60 to-transparent text-white opacity-0 group-hover:opacity-100 transition">
              <div className="text-sm font-medium">{it.title}</div>
              {it.tag && <div className="text-xs opacity-80">{it.tag}</div>}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
