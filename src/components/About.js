import React from 'react'
import Achievements from './experience/Achievements'
import VerticalTimeline from '../components/experience/verticalTimeline'
import { delay, motion } from 'framer-motion'
function About() {
  return (
    <motion.div>
      <div >
        <section class="page-section " id="about">
          <div class="container px-4 px-lg-5">
            <VerticalTimeline />
            <Achievements />
          </div>
        </section>
      </div>
    </motion.div>
  )
}

export default About
