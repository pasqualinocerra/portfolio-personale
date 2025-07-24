import React from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Team Leader del progetto Habbit',
    quote:
      'Pasqualino ha portato al progetto energia, voglia di fare e capacità di imparare velocemente. Ha collaborato con il team in modo impeccabile.',
  },
  {
    name: 'Mentor dell’Accademia',
    quote:
      'Ottimo problem solver. Si distingue per determinazione e curiosità. È una persona che non si ferma al minimo indispensabile.',
  },
]

const Testimonials = () => {
  return (
    <motion.section
      id="testimonials"
      className="p-8 md:p-16 bg-gray-900 dark:bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-400 dark:text-blue-700 text-center">Dicono di me</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 dark:bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-lg text-gray-300 dark:text-gray-800 italic">"{t.quote}"</p>
            <p className="mt-4 text-blue-400 dark:text-blue-700 font-semibold">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Testimonials
