"use client";
const sneakers = [
  { src: "/img/sneaker1.jpg", title: "Sneaker 1", ratio: "aspect-[4/3]", tag: "Sneaker" },
  { src: "/img/sneaker2.jpg", title: "Sneaker 2", ratio: "aspect-[4/3]", tag: "Sneaker" },
  { src: "/img/sneaker3.jpg", title: "Sneaker 3", ratio: "aspect-[4/3]", tag: "Sneaker" },
  { src: "/img/sneaker4.jpg", title: "Sneaker 4", ratio: "aspect-[4/3]", tag: "Sneaker" },
];

import Countdown from "@/components/Countdown";
import SubscribeForm from "@/components/SubscribeForm";
import GalleryGrid from "@/components/GalleryGrid";

const portraits = [
  { src: "/img/pic1.jpg", title: "Portrait 1", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic2.jpg", title: "Portrait 2", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic3.jpg", title: "Portrait 3", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic4.jpg", title: "Portrait 4", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic5.jpg", title: "Portrait 5", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic6.jpg", title: "Portrait 6", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic7.jpg", title: "Portrait 7", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic8.jpg", title: "Portrait 8", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic9.jpg", title: "Portrait 9", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic10.jpg", title: "Portrait 10", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic11.jpg", title: "Portrait 11", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/pic12.jpg", title: "Portrait 12", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/_DSC2606.jpg", title: "Portrait 13", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/_DSC2628-Enhanced-NR.jpg", title: "Portrait 14", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/_DSC5369.jpg", title: "Portrait 15", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/_DSC5394.jpg", title: "Portrait 16", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/_DSC5619.jpg", title: "Portrait 17", ratio: "aspect-[3/4]", tag: "Portrait" },
  { src: "/img/IMG_4256-2.jpg", title: "Portrait 18", ratio: "aspect-[3/4]", tag: "Portrait" },
];

// ...landscapes array removed, not used...


export default function Page() {
  return (
    <div className="space-y-24">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-white/5" />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Avnish — <span className="opacity-70">Photography Drops</span>
              </h1>
              <p className="text-lg opacity-80">
                Passion-driven photography. Monthly portraits and landscapes.
              </p>
              <div className="rounded-2xl p-5 border border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/60 backdrop-blur">
                <div className="mb-3 text-sm uppercase tracking-wide opacity-70">Next Drop</div>
                <Countdown />
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-3xl h-72 md:h-96 overflow-hidden border border-gray-200 dark:border-gray-800 shadow-lg">
                {/* hero placeholder */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://picsum.photos/seed/hero-avnsh/1600/1000"
                  alt="Hero"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="text-sm mb-3 opacity-80">Join the Drop List</div>
                <SubscribeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTRAITS */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Portraits</h2>
        </div>
        <GalleryGrid items={portraits} />
      </section>

      {/* SNEAKER COLLECTION */}
      <section className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Sneaker Collection</h2>
        </div>
        <GalleryGrid items={sneakers} />
      </section>
      {/* LANDSCAPES section intentionally left out as requested */}

      {/* FOOTER */}
      <footer className="border-t border-gray-200 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="text-sm opacity-70">© {new Date().getFullYear()} avnsh.club — Monthly Photo Drops</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="opacity-80 hover:opacity-100" href="#" aria-label="Instagram">Instagram</a>
            <a className="opacity-80 hover:opacity-100" href="#" aria-label="YouTube">YouTube</a>
            <a className="opacity-80 hover:opacity-100" href="#" aria-label="GitHub">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
