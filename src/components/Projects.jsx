import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaShieldAlt, FaLaptop } from 'react-icons/fa'
import RequestDemoModal from './RequestDemoModal'

const Projects = () => {
  const [showModal, setShowModal] = useState(false)

  const projects = [
    {
      title: 'Habbit - Affitti Universitari',
      icon: <FaHome size={30} className="text-rose-500" />,
      description: 'Progetto accademico per studenti universitari.',
      tech: ['React', 'Tailwind', 'MongoDB'],
      private: true
    },
    {
      title: 'Cyber Security Dashboard',
      icon: <FaShieldAlt size={30} className="text-cyan-500" />,
      description: 'Dashboard per dati di sicurezza aziendale.',
      tech: ['React', 'Bootstrap', 'JWT'],
      private: true
    },
    {
      title: 'Landing Page Demos',
      icon: <FaLaptop size={30} className="text-yellow-500" />,
      description: 'Landing page e UI moderne per esercizio.',
      tech: ['React', 'Tailwind', 'Bootstrap', 'Bulma', 'WordPress'],
      private: false,
      link: 'https://tuo-link-demo.vercel.app'
    }
  ]

  return (
    <section id='projects' className="max-w-6xl mx-auto px-6 py-20">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Progetti Realizzati
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <div className="mb-4">{proj.icon}</div>
            <h3 className="text-2xl font-semibold mb-2 text-white">{proj.title}</h3>
            <p className="text-gray-400 mb-4">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
            {proj.private ? (
              <button
                onClick={() => setShowModal(true)}
                className="text-sm text-purple-400 hover:text-purple-300 underline mt-auto"
              >
                Richiedi Accesso alla Demo Privata
              </button>
            ) : (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-400 hover:text-purple-300 underline mt-auto"
              >
                Visita il progetto
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </section>
  )
}

export default Projects
