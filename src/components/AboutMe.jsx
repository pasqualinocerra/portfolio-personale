import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaGraduationCap, FaRocket } from 'react-icons/fa'

const AboutMe = () => {
  return (
    <section id='aboutMe' className="max-w-5xl mx-auto px-6 py-20 text-center">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Chi Sono
      </motion.h2>

      <motion.p
        className="text-lg text-gray-500 mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Sono Pasqualino Cerra, un programmatore frontend appena diplomato, curioso e determinato.
        Ho imparato a costruire interfacce moderne e mi sto evolvendo verso il full stack.
        Amo realizzare progetti veri, concreti, che possano avere un impatto.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-10 text-left">
        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <FaGraduationCap size={40} className="text-purple-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Formazione</h3>
          <p className="text-gray-400">
            Ho completato un percorso intensivo in sviluppo frontend presso 'Mia Academy', dove ho imparato Html,CSS,SASS,JavaScript,Tailwind,
            TypeScript e React.
            Durante il corso ho lavorato su progetti reali di gruppo insieme ai colleghi del corso,creando un vero e proprio sito funzionale.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <FaLaptopCode size={40} className="text-blue-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Progetti</h3>
          <p className="text-gray-400">
            Ho lavorato su <b>Habbit</b>, un'app per affitti universitari, più landing page, dashboard aziendali e interfacce UI moderne.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <FaRocket size={40} className="text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-2 text-white">Obiettivi</h3>
          <p className="text-gray-400">
            Voglio diventare un Full Stack Developer e lavorare su progetti sempre più sfidanti.
            Non mi fermo mai e sono sempre pronto a imparare.
          </p>
        </motion.div>
      </div>

    </section>
  )
}

export default AboutMe

