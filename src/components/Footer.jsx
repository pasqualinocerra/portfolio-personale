import React from 'react'

const Footer = () => {
  return (
    <footer className="py-6 text-center text-gray-400 bg-gray-800 dark:bg-gray-200 dark:text-gray-700 text-sm">
      © {new Date().getFullYear()} Pasqualino Cerra - Portfolio personale. Tutti i diritti riservati.
    </footer>
  )
}

export default Footer
