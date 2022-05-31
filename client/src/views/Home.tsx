import React from 'react'
import {motion} from "framer-motion"
import Landing from '../components/Landing/Landing'
import animationStyles from '../config/animationStyles'

const Home = () => {
  return (
    <motion.div
    initial={animationStyles.initial}
    animate={animationStyles.animate}
    exit={animationStyles.exit}>
        <Landing/>
    </motion.div>
  )
}

export default Home