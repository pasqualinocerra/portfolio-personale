import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white"
        variants={item}
      >
        Pasqualino Cerra
      </motion.h1>
      <motion.p
        className="text-xl md:text-2xl max-w-3xl leading-relaxed text-gray-300"
        variants={item}
      >
        Sviluppatore Frontend & aspirante Full Stack.<br />
        Mi appassiona creare interfacce semplici per problemi complessi.<br />
        <span className="text-blue-400">
          Per me il codice è un mezzo per costruire cose utili e accessibili.
        </span>
      </motion.p>
      <motion.a
        href="https://github.com/pasqualinocerra"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 mt-8 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 transition"
        variants={item}
      >
        Guarda i miei progetti
      </motion.a>
    </motion.section>
  )
}

export default Hero
