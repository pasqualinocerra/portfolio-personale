import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

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
      className="relative px-6 py-28 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center text-white mb-20"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Dicono di me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/10 hover:scale-[1.02] transition-transform duration-500"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <FaQuoteLeft className="text-purple-500 text-3xl mb-4" />
            <p className="text-gray-200 text-lg italic leading-relaxed">"{t.quote}"</p>
            <p className="mt-6 text-right text-purple-400 font-semibold">{t.name}</p>

            {/* Glow Effect */}
            <div className="absolute -inset-1 rounded-3xl opacity-20 blur-xl bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 z-[-1]" />
          </motion.div>
        ))}
      </div>

      {/* Animated Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse -z-10" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-pink-500/20 rounded-full blur-[80px] animate-pulse -z-10" />
    </motion.section>
  )
}

export default Testimonials
