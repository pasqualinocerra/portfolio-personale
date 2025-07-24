import React from 'react'
import { motion } from 'framer-motion'

const RequestDemoModal = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-xl p-8 w-full max-w-md text-gray-900 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-gray-600 text-xl"
          aria-label="Close modal"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold mb-4">Richiedi Accesso alla Demo</h3>
        <p className="mb-6 text-gray-500 text-sm">
          Compila il form e riceverai un contatto diretto per accedere alla demo privata.
        </p>

        <form
          action="https://formsubmit.co/pasqualinocerra13@gmail.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input type="hidden" name="_subject" value="Richiesta Demo Privata dal Portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />

          <input
            type="text"
            name="name"
            placeholder="Il tuo nome"
            required
            className="p-3 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="La tua email"
            required
            className="p-3 border rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Motivo della richiesta"
            required
            rows="4"
            className="p-3 border rounded-lg"
          ></textarea>

          <button
            type="submit"
            className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Invia Richiesta
          </button>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default RequestDemoModal
