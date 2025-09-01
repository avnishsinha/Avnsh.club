import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    url: "https://instagram.com/avnish_7742",
    icon: "/instagram.svg",
    color: "from-[#CBA135] to-[#E5C67A]", // gold gradient
  },
  {
    name: "GitHub",
    url: "https://github.com/avnsh",
    icon: "/github.svg",
    color: "from-gray-800 to-gray-600",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/avnishkumarsinha",
    icon: "/linkedin.svg",
    color: "from-blue-600 to-blue-400",
  },
];

export default function SocialLinks() {
  return (
    <section className="relative py-20 px-4 max-w-4xl mx-auto overflow-hidden">
      {/* Animated luxury background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 60% 40%, #CBA135 0%, #E5C67A 40%, #fff0 100%)",
          filter: "blur(40px)",
        }}
      />
      <h2 className="relative z-10 text-4xl font-extrabold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#CBA135] via-[#E5C67A] to-[#fff] drop-shadow-lg">Connect & Create</h2>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
  {socials.map((s) => (
          <motion.a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -12, scale: 1.08, boxShadow: "0 8px 32px #CBA13555" }}
            whileTap={{ scale: 0.98 }}
            className={`flex flex-col items-center justify-center gap-4 p-8 rounded-2xl shadow-xl bg-gradient-to-r ${s.color} text-white dark:text-black transition-all duration-300 border-4 border-[#CBA135]/30`}
          >
            <motion.img src={s.icon} alt={s.name} className="w-14 h-14 mb-2" whileHover={{ scale: 1.2, rotate: 8 }} />
            <span className="text-2xl font-bold tracking-wide drop-shadow">{s.name}</span>
          </motion.a>
        ))}
      </div>
      {/* Instagram Feed Preview */}
      <div className="relative z-10 mt-12 text-center">
        <h3 className="text-lg font-semibold mb-4 text-[#CBA135]">Instagram Feed Preview</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Instagram embed: luxury style */}
          <iframe
            src="https://www.instagram.com/avnish_7742/embed"
            width="340"
            height="420"
            frameBorder="0"
            scrolling="no"
            allowTransparency={true}
            className="rounded-2xl border-4 border-[#CBA135]/40 shadow-lg"
            title="Instagram Preview"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
