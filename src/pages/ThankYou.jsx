import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ThankYou = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-800 to-black text-white text-center px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-4">Richiesta Inviata!</h1>
      <p className="mb-8 text-lg text-gray-300">Grazie per aver richiesto l’accesso alla demo privata.<br />Ti risponderò al più presto via email.</p>
      <Link
        to="/"
        className="bg-white text-purple-800 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-100 transition"
      >
        Torna al Portfolio
      </Link>
    </motion.div>
  )
}

export default ThankYou
