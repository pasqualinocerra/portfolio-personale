import React from 'react'
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gray-900 dark:bg-gray-100 text-center py-10 px-4 text-sm">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 animate-pulse" />

      {/* Content */}
      <div className="max-w-6xl mx-auto space-y-4">
        <p className="text-gray-400 dark:text-gray-600">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-blue-400 dark:text-blue-700 hover:text-blue-500 dark:hover:text-blue-800 transition">
            Pasqualino Cerra
          </span>{' '}
          — Portfolio personale. Tutti i diritti riservati.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-blue-400 dark:text-blue-700 text-lg">
          <a
            href="https://github.com/pasqualinocerra"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white dark:hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pasqualino-cerra-509873272/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white dark:hover:text-black transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-4 text-xs mt-2 text-gray-500 dark:text-gray-600">
          <span className="bg-gray-800 dark:bg-white px-3 py-1 rounded-full border border-blue-500 dark:border-blue-700">
            ⚛ Built with React
          </span>
          <span className="bg-gray-800 dark:bg-white px-3 py-1 rounded-full border border-gray-500">
            ▲ Deployed on Vercel
          </span>
        </div>

        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          aria-label="Torna su"
          className="mt-6 inline-flex items-center justify-center w-10 h-10 rounded-full border border-blue-400 dark:border-blue-700 text-blue-400 dark:text-blue-700 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-800 transition"
        >
          <FaArrowUp />
        </button>
      </div>
    </footer>
  )
}

export default Footer
