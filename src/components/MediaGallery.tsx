"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export type MediaItem = {
  id: string;
  type: "image" | "video";
  url: string;
  thumbnail: string;
  title?: string;
  driveLink?: string;
};

const media: MediaItem[] = [
  // TODO: Replace with real Google Drive links and thumbnails
  {
    id: "1",
    type: "image",
    url: "https://drive.google.com/uc?id=YOUR_IMAGE_ID",
    thumbnail: "https://via.placeholder.com/300x200?text=Image+1",
    title: "Sample Image",
    driveLink: "https://drive.google.com/file/d/YOUR_IMAGE_ID/view",
  },
  {
    id: "2",
    type: "video",
    url: "https://drive.google.com/uc?id=YOUR_VIDEO_ID",
    thumbnail: "https://via.placeholder.com/300x200?text=Video+1",
    title: "Sample Video",
    driveLink: "https://drive.google.com/file/d/YOUR_VIDEO_ID/view",
  },
];

export default function MediaGallery() {
  const [selected, setSelected] = useState<MediaItem | null>(null);

  return (
    <section id="work" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Media</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {media.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group bg-neutral-900 dark:bg-neutral-100"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover group-hover:opacity-80 transition duration-300"
            />
            <div className="absolute top-2 right-2 bg-white/80 rounded-full p-2">
              <img src="/drive-icon.svg" alt="Google Drive" className="w-6 h-6" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white dark:text-black">
              <span className="font-semibold">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </div>
      {/* Lightbox Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 max-w-2xl w-full relative"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
          >
            {selected.type === "image" ? (
              <img src={selected.url} alt={selected.title} className="w-full rounded-xl" />
            ) : (
              <video src={selected.url} controls autoPlay className="w-full rounded-xl" />
            )}
            <a
              href={selected.driveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-xl shadow-lg"
            >
              View on Drive
            </a>
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 left-4 text-2xl text-black dark:text-white"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
