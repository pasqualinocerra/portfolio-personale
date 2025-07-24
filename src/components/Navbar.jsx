import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const menuItems = (
    <>
      {['aboutMe', 'projects', 'contact'].map((section) => {
        const label =
          section === 'aboutMe'
            ? 'Chi sono'
            : section === 'projects'
            ? 'Progetti'
            : 'Contatti'
        return (
          <ScrollLink
            key={section}
            to={section}
            smooth={true}
            duration={500}
            className="cursor-pointer relative text-white dark:text-gray-900 py-2 block hover:text-blue-500 dark:hover:text-blue-700 transition-colors focus:outline-none focus-visible:underline focus-visible:underline-offset-4"
            onClick={() => setMenuOpen(false)}
            activeClass="font-bold"
            spy={true}
          >
            {label}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
          </ScrollLink>
        )
      })}
      <button
        onClick={() => {
          toggleTheme()
          setMenuOpen(false)
        }}
        className="mt-2 px-5 py-1 rounded-full bg-blue-600 text-white dark:bg-blue-800 flex items-center gap-2 hover:bg-blue-700 dark:hover:bg-blue-900 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <FaSun className="text-yellow-400" />
        ) : (
          <FaMoon className="text-gray-900" />
        )}
        <span className="font-semibold">{theme === 'dark' ? 'Light' : 'Dark'}</span>
      </button>
    </>
  )

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ease-in-out
        ${
          scrolled
            ? 'bg-gray-900 bg-opacity-80 backdrop-blur-lg shadow-lg dark:bg-gray-100 dark:bg-opacity-70 dark:text-gray-900'
            : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white dark:text-gray-900">
        <div
          className={`font-bold text-xl cursor-pointer select-none transition-shadow duration-300
            ${
              scrolled
                ? 'drop-shadow-lg text-blue-400 dark:text-blue-700'
                : 'text-white dark:text-gray-900'
            }`}
          aria-label="Logo Pasqualino Cerra"
        >
          Pasqualino Cerra
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8 text-lg items-center">{menuItems}</div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="relative w-8 h-8 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            <div
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white dark:bg-gray-900 rounded transition-transform duration-300
                ${menuOpen ? 'rotate-45 translate-x-1.5 -translate-y-1.5' : '-translate-x-3 -translate-y-1.5'}`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white dark:bg-gray-900 rounded transition-opacity duration-300
                ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
            ></div>
            <div
              className={`absolute top-1/2 left-1/2 w-6 h-0.5 bg-white dark:bg-gray-900 rounded transition-transform duration-300
                ${menuOpen ? '-rotate-45 -translate-x-1.5 translate-y-1.5' : 'translate-x-3 translate-y-1.5'}`}
            ></div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-gray-900 dark:bg-gray-100 dark:text-gray-900 px-6 py-4 space-y-4
        transition-opacity duration-300 ease-in-out
        ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {menuItems}
      </div>
    </nav>
  )
}

export default Navbar
