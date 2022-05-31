import React from 'react'
import Turns from '../components/Turns/Turns'
import { motion } from 'framer-motion'
import animationStyles from '../config/animationStyles'

const TurnsView = () => {
  return (
    <motion.div
    initial={animationStyles.initial}
    animate={animationStyles.animate}
    exit={animationStyles.exit}>
        <Turns/>
    </motion.div>
  )
}

export default TurnsView