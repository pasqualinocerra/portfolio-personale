import React from 'react'
import { motion } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const skills = [
  { name: 'React', info: 'La mia tecnologia principale per il frontend.' },
  { name: 'Tailwind', info: 'Per scrivere stili più veloci e senza stress.' },
  { name: 'Node.js', info: 'Inizio ad approfondire il backend con Node.' },
  { name: 'MongoDB', info: 'Database NoSQL usato nei miei progetti di gruppo.' },
  { name: 'Git', info: 'Versionamento professionale del codice.' },
]

const SkillMap = () => {
  return (
    <motion.section
      id="skills"
      className="p-8 md:p-16 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-100 dark:to-gray-200 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-blue-400 dark:text-blue-700">Skill Map Interattiva</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-700 dark:bg-white dark:text-gray-900 text-white rounded-lg shadow-lg cursor-pointer hover:scale-105 transition"
            data-tooltip-id={`tooltip-${index}`}
            data-tooltip-content={skill.info}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            {skill.name}
            <Tooltip id={`tooltip-${index}`} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default SkillMap
