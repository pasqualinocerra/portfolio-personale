import React, { useState, useEffect } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useTheme } from '../context/ThemeContext'
import { FaBars, FaTimes } from 'react-icons/fa'

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
      <ScrollLink
        to="aboutMe"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400 dark:hover:text-blue-700 block py-2"
        onClick={() => setMenuOpen(false)}
      >
        Chi sono
      </ScrollLink>
      <ScrollLink
        to="projects"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400 dark:hover:text-blue-700 block py-2"
        onClick={() => setMenuOpen(false)}
      >
        Progetti
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer hover:text-blue-400 dark:hover:text-blue-700 block py-2"
        onClick={() => setMenuOpen(false)}
      >
        Contatti
      </ScrollLink>
      <button
        onClick={() => {
          toggleTheme()
          setMenuOpen(false)
        }}
        className="mt-2 px-3 py-1 rounded bg-blue-500 text-white dark:bg-blue-700"
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </>
  )

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-gray-900 shadow-lg dark:bg-gray-100 dark:text-gray-900' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white dark:text-gray-900">
        <div className="font-bold text-xl cursor-pointer">Pasqualino Cerra</div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-lg items-center">
          {menuItems}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 dark:bg-gray-100 dark:text-gray-900 px-6 py-4 space-y-4">
          {menuItems}
        </div>
      )}
    </nav>
  )
}

export default Navbar

