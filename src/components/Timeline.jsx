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
      className="p-8 md:p-16 bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-12 text-center text-blue-400 dark:text-blue-700">La Mia Storia</h2>
      <div className="relative border-l-4 border-blue-500 dark:border-blue-700 max-w-xl mx-auto">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="mb-10 ml-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-700 rounded-full -left-2 border-2 border-white dark:border-gray-900"></div>
            <h3 className="text-xl font-semibold">{item.year}</h3>
            <p className="mt-2 text-gray-300 dark:text-gray-700">{item.event}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Timeline
