import React from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCss3Alt } from 'react-icons/fa'

const skills = [
  { name: 'React', info: 'La mia tecnologia principale per il frontend.', icon: <FaReact size={40} className="text-cyan-400" /> },
  { name: 'Tailwind', info: 'Per scrivere stili più veloci e senza stress.', icon: <FaCss3Alt size={40} className="text-teal-400" /> },
  { name: 'Node.js', info: 'Inizio ad approfondire il backend con Node.', icon: <FaNodeJs size={40} className="text-green-500" /> },
  { name: 'MongoDB', info: 'Database NoSQL usato nei miei progetti di gruppo.', icon: <FaDatabase size={40} className="text-green-400" /> },
  { name: 'Git', info: 'Versionamento professionale del codice.', icon: <FaGitAlt size={40} className="text-orange-400" /> },
]

const SkillMap = () => {
  return (
    <motion.section
      id="skills"
      className="relative p-12 md:p-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 dark:from-gray-100 dark:via-gray-200 dark:to-gray-100 text-center rounded-3xl shadow-xl overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background animated glowing circles */}
      <div className="absolute top-10 left-1/4 w-40 h-40 rounded-full bg-cyan-500 opacity-30 filter blur-3xl animate-pulse mix-blend-screen"></div>
      <div className="absolute bottom-20 right-1/3 w-52 h-52 rounded-full bg-pink-500 opacity-25 filter blur-2xl animate-pulse mix-blend-screen"></div>

      <h2 className="relative z-10 text-4xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 dark:from-purple-700 dark:to-blue-500">
        Skill Map Interattiva
      </h2>

      <div className="relative z-10 flex flex-wrap justify-center gap-12 max-w-4xl mx-auto">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-200 dark:to-gray-300 rounded-full w-32 h-32 shadow-lg cursor-pointer hover:scale-110 hover:shadow-2xl transition-transform duration-400 ease-out"
            data-tooltip-id={`tooltip-${idx}`}
            data-tooltip-content={skill.info}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: idx * 0.15, type: 'spring', stiffness: 100 }}
          >
            <div className="mb-2">{skill.icon}</div>
            <span className="text-white dark:text-gray-900 font-semibold text-lg select-none">{skill.name}</span>
            <Tooltip
              id={`tooltip-${idx}`}
              place="top"
              style={{ backgroundColor: 'rgba(0,0,0,0.85)', color: '#fff', fontSize: '0.9rem', padding: '6px 10px', borderRadius: '8px' }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default SkillMap
