import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="relative px-6 py-28 bg-gray-950 text-white text-center overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glow sfondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse -z-10" />

      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contattami
      </motion.h2>

      <p className="text-gray-300 text-lg max-w-xl mx-auto mb-10">
        Vuoi collaborare su un progetto, fare networking o semplicemente scambiare due parole? Sono sempre felice di ascoltare nuove idee!
      </p>

      {/* Social Icons */}
      <div className="flex justify-center space-x-8 text-3xl mb-10">
        <motion.a
          href="https://www.linkedin.com/in/pasqualino-cerra-509873272/"
          aria-label="LinkedIn"
          className="text-white hover:text-blue-500 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://github.com/pasqualinocerra"
          aria-label="GitHub"
          className="text-white hover:text-gray-300 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="mailto:pasqualinocerra13@gmail.com"
          aria-label="Email"
          className="text-white hover:text-red-500 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
        >
          <FaEnvelope />
        </motion.a>
      </div>

      {/* Call to Action */}
      <motion.a
        href="mailto:pasqualinocerra13@gmail.com"
        className="inline-block mt-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
      >
        Contattami ora
      </motion.a>

      {/* Motivational text */}
      <p className="mt-16 text-sm text-gray-500 italic">
        “Ogni connessione è un’opportunità. Anche una semplice email può cambiare tutto.”
      </p>
    </motion.section>
  )
}

export default Contact
