export default function Footer() {
  return (
    <footer className="w-full py-8 text-center text-sm text-neutral-400 dark:text-neutral-600 border-t border-neutral-800 dark:border-neutral-200 mt-20">
      <nav className="mb-2 flex justify-center gap-6">
        <a href="#work" className="hover:underline">Work</a>
        <a href="#contact" className="hover:underline">Contact</a>
        <a href="https://github.com/avnsh/portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
      </nav>
      <div>&copy; {new Date().getFullYear()} Avnish Kumar Sinha. All rights reserved.</div>
    </footer>
  );
}
