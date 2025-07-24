import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const ParallaxBackground = () => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, -100])

  return (
    <motion.div
      style={{ y }}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-gray-900 to-black dark:from-gray-100 dark:to-gray-300 opacity-20"
    ></motion.div>
  )
}

export default ParallaxBackground
