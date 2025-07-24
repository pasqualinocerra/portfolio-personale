import React from 'react'
import { motion } from 'framer-motion'
import { FaRocket, FaTerminal, FaUserSecret } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const GlitchText = ({ text }) => {
  return (
    <span className="relative glitch text-blue-400 font-bold">
      {text}
      <span aria-hidden="true">{text}</span>
    </span>
  )
}

const SecretModal = ({ onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white/10 p-8 rounded-2xl shadow-2xl max-w-lg text-white border border-white/20 overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Particelle background */}
        <div className="absolute inset-0 opacity-10 animate-pulse bg-gradient-to-br from-purple-500 via-blue-500 to-transparent blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <FaUserSecret size={32} />
            <TypeAnimation
              sequence={[
                'Modalità Segreta Attivata...',
                2000,
                'Benvenuto in una sezione riservata!',
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-2xl md:text-3xl font-bold"
              repeat={Infinity}
            />
          </div>

          <p className="mb-4 text-gray-300 leading-relaxed">
            Questa area è stata progettata per chi <GlitchText text="supera i limiti" />.<br />
            Qui scoprirai il mio percorso, la mia etica e i miei obiettivi reali.
          </p>

          <ul className="mb-6 space-y-3 text-gray-200">
            <li className="flex items-center gap-2">
              <FaRocket />
              Obiettivo: <GlitchText text="Full Stack Developer" />
            </li>
            <li className="flex items-center gap-2">
              <FaTerminal />
              Terminale interattivo e funzionalità nascoste.
            </li>
            <li className="flex items-center gap-2">
              🚀 Curiosità continua, voglia di crescere e migliorare ogni giorno.
            </li>
          </ul>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-700 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            onClick={onClose}
          >
            Chiudi la Modalità Segreta
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default SecretModal
