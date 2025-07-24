import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="p-8 md:p-16 bg-gray-800 dark:bg-gray-200 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-blue-400 dark:text-blue-700">Contattami</h2>
      <p className="mb-4 text-gray-300 dark:text-gray-900">
        Vuoi parlarmi di un progetto o semplicemente fare networking?
      </p>
      <div className="flex justify-center space-x-8 text-gray-300 dark:text-gray-900 text-2xl">
        <a href="https://www.linkedin.com/in/pasqualino-cerra-509873272/" aria-label="LinkedIn" className="hover:text-blue-600 dark:hover:text-blue-800">
          <FaLinkedin />
        </a>
        <a href="https://github.com/pasqualinocerra" aria-label="GitHub" className="hover:text-gray-100 dark:hover:text-gray-700">
          <FaGithub />
        </a>
        <a href="pasqualinocerra13@gmail.com" aria-label="Email" className="hover:text-red-500">
          <FaEnvelope />
        </a>
      </div>
    </motion.section>
  )
}

export default Contact
