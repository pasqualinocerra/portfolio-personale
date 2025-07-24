import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaShieldAlt, FaLaptop } from 'react-icons/fa'
import RequestDemoModal from './RequestDemoModal'

const Projects = () => {
  const [showModal, setShowModal] = useState(false)

  const projects = [
    {
      title: 'Habbit - Affitti Universitari',
      icon: <FaHome size={32} className="text-rose-500 drop-shadow-md" />,
      description: 'Progetto accademico per studenti universitari.',
      tech: ['React', 'Tailwind', 'MongoDB'],
      private: true
    },
    {
      title: 'Cyber Security Dashboard',
      icon: <FaShieldAlt size={32} className="text-cyan-400 drop-shadow-md" />,
      description: 'Dashboard per dati di sicurezza aziendale.',
      tech: ['React', 'Bootstrap', 'JWT'],
      private: true
    },
    {
      title: 'Landing Page Demos',
      icon: <FaLaptop size={32} className="text-yellow-400 drop-shadow-md" />,
      description: 'Landing page e UI moderne per esercizio.',
      tech: ['React', 'Tailwind', 'Bootstrap', 'Bulma', 'WordPress'],
      private: false,
      link: 'https://tuo-link-demo.vercel.app'
    }
  ]

  return (
    <motion.section
      id="projects"
      className="relative px-6 py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-blue-400"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Progetti Realizzati
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            className="relative group bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute top-4 right-4 z-0 blur-[80px] opacity-30 group-hover:opacity-50 transition duration-500 pointer-events-none">
              {proj.icon}
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="mb-4">{proj.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{proj.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium border border-blue-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {proj.private ? (
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-auto text-sm text-purple-400 hover:text-purple-300 underline transition-colors self-start"
                >
                  Richiedi Accesso alla Demo Privata
                </button>
              ) : (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm text-purple-400 hover:text-purple-300 underline transition-colors self-start"
                >
                  Visita il progetto
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {showModal && <RequestDemoModal onClose={() => setShowModal(false)} />}
    </motion.section>
  )
}

export default Projects
