import React from 'react'
import { motion } from 'framer-motion'

const timeline = [
  { year: '2023', event: 'Inizio del percorso in programmazione frontend' },
  { year: '2024', event: 'Progetto Habbit: sito per case in affitto per studenti universitari' },
  { year: '2025', event: 'Diploma di Programmatore Frontend e inizio del Full Stack Journey' },
]

const Timeline = () => {
  return (
    <motion.section
      id="timeline"
      className="relative py-24 bg-gradient-to-r from-indigo-900 via-blue-900 to-black dark:from-gray-200 dark:via-gray-300 dark:to-gray-100 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-5xl font-extrabold text-center mb-20 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 drop-shadow-xl">
        La Mia Storia
      </h2>

      <div
        className="
          relative 
          flex flex-wrap justify-center gap-x-12 gap-y-12 
          max-w-full px-6 mx-auto 
          overflow-visible
        "
      >
        {/* Linea orizzontale decorativa */}
        <div className="absolute top-28 left-0 right-0 h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full opacity-70 z-0 shadow-lg"></div>

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex-shrink-0 w-full max-w-xs cursor-default select-none"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            {/* Cerchio luminoso con alone neon */}
            <span className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-purple-400 to-pink-500 shadow-[0_0_25px_5px_rgba(139,92,246,0.6)] border-4 border-white z-10"></span>

            <div className="relative bg-gray-900 dark:bg-white dark:text-gray-900 rounded-3xl px-8 py-10 shadow-2xl hover:shadow-[0_0_30px_#d6336c] transition-shadow duration-500 z-20">
              <h3 className="text-3xl font-bold mb-4 text-white dark:text-gray-900 tracking-wide">{item.year}</h3>
              <p className="text-gray-300 dark:text-gray-700 text-lg leading-relaxed">{item.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Timeline
