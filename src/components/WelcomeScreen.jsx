import React from 'react'
import { motion } from 'framer-motion'

const WelcomeScreen = ({ onEnter }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-black text-white text-center p-8">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Benvenuto nel Portfolio di Pasqualino Cerra
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl mb-8 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Esplora i miei progetti, competenze e percorso professionale.
      </motion.p>

      <motion.button
        onClick={onEnter}
        className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg hover:shadow-2xl text-xl transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Visita il Portfolio
      </motion.button>

      <motion.p
        className="mt-10 text-xs text-gray-500 italic"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        (Tip: premi <span className="font-semibold">Ctrl + K</span> per sbloccare un'area segreta)
      </motion.p>
    </div>
  )
}

export default WelcomeScreen
