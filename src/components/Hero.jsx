import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 py-24 bg-gradient-to-br from-gray-900 to-black overflow-hidden">

      {/* Animated background circles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-500 opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full bg-purple-600 opacity-15 animate-pulse delay-700 blur-2xl"></div>

      <motion.h1
        className="relative z-10 text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pasqualino Cerra
      </motion.h1>

      <motion.p
        className="relative z-10 max-w-xl mt-6 text-lg md:text-2xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Sviluppatore Frontend & aspirante Full Stack.<br />
        <span className="text-blue-400 font-semibold">
          Codice come arte, interfacce che parlano.
        </span>
      </motion.p>

      <motion.a
        href="https://github.com/pasqualinocerra"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-10 mt-10 inline-block px-8 py-4 rounded-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg hover:shadow-xl transition-transform hover:scale-105"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        Guarda i miei progetti
      </motion.a>
    </section>
  )
}

export default Hero
