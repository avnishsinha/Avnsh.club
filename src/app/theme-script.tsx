export function ThemeScript() {
  const script = `
  (function() {
    try {
      const ls = localStorage.getItem('theme');
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldDark = ls ? ls === 'dark' : systemDark;
      if (shouldDark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    } catch (e) {}
  })();`;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
