import React, { useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { id: 'aboutMe', label: 'Chi sono' },
    { id: 'projects', label: 'Progetti' },
    { id: 'contact', label: 'Contatti' },
  ]

  return (
    <nav className="bg-gray-900 dark:bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#"
            aria-label="Logo Pasqualino Cerra"
            className="text-white dark:text-gray-900 font-extrabold text-2xl select-none hover:text-blue-500 dark:hover:text-blue-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Pasqualino Cerra
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-gray-900 font-medium cursor-pointer transition-colors px-3 py-2 rounded-md"
                activeClass="text-white dark:text-gray-900 border-b-2 border-blue-500"
              >
                {label}
              </ScrollLink>
            ))}

            {/* Theme Toggle */}
            <button
              onClick={() => toggleTheme()}
              aria-label="Toggle theme"
              className="ml-4 flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-400"
              title={`Passa a ${theme === 'dark' ? 'Light Mode' : 'Dark Mode'}`}
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 dark:hover:bg-gray-300 dark:text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition"
            >
              {/* Hamburger icon */}
              <svg
                className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              </svg>

              {/* Close icon */}
              <svg
                className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? 'max-h-60 opacity-100 pt-2' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pb-4">
            {menuItems.map(({ id, label }) => (
              <ScrollLink
                key={id}
                to={id}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-2 rounded-md text-gray-300 dark:text-gray-700 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white font-medium cursor-pointer transition"
                activeClass="bg-blue-700 dark:bg-blue-800 text-white"
              >
                {label}
              </ScrollLink>
            ))}

            <button
              onClick={() => {
                toggleTheme()
                setMenuOpen(false)
              }}
              aria-label="Toggle theme"
              className="mt-3 flex justify-center items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-800 transition font-semibold"
            >
              {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
