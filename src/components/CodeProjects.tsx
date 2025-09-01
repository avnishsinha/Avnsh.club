import { motion } from "framer-motion";

export type Project = {
  title: string;
  tagline: string;
  tags: string[];
  repo: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio Website",
    tagline: "Personal site built with Next.js & Tailwind",
    tags: ["React", "Next.js", "Tailwind"],
    repo: "https://github.com/avnsh/portfolio",
    demo: "https://avnsh.club",
  },
  {
    title: "Creative Gallery",
    tagline: "Media drop page with Google Drive integration",
    tags: ["Node.js", "Express", "Google Drive API"],
    repo: "https://github.com/avnsh/gallery",
  },
];

export default function CodeProjects() {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Code Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            whileHover={{ rotateY: 12, scale: 1.04 }}
            className="relative rounded-2xl shadow-xl bg-neutral-900 dark:bg-neutral-100 p-8 flex flex-col gap-4 transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">{p.title}</span>
            </div>
            <span className="text-neutral-400 dark:text-neutral-600">{p.tagline}</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-xs text-white dark:text-black font-semibold shadow">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-neutral-800 dark:bg-neutral-200 text-white dark:text-black font-semibold shadow hover:scale-105 transition-transform">GitHub</a>
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-green-400 text-white font-semibold shadow hover:scale-105 transition-transform">Live Demo</a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
