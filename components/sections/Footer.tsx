export default function Footer() {
    return (
      <footer className="mt-16 py-6 border-t border-gray-700 text-center text-sm text-gray-400">
        <p>Made with ❤️ using Next.js, TailwindCSS, and Sanity CMS</p>
        <p>
          Source on{' '}
          <a href="https://github.com/vijja4git/greatest-portfolio" target="_blank" className="underline text-blue-400">
            GitHub
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Cherish Vijjagiri</p>
      </footer>
    );
  }