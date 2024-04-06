import React from 'react'
import { motion } from 'framer-motion'
import node from '../components/resources/assets/icons/node.png'
import express from '../components/resources/assets/icons/express.png'
import mongodb from '../components/resources/assets/icons/mongodb.png'
import react from '../components/resources/assets/icons/react.png'
import javascript from '../components/resources/assets/icons/js.png'
import angular from '../assets/angular.png'
import styled from '../components/experience/achivements.module.css'

import {skills} from '../helpers/constants'
function Skills() {
    return (
        <motion.div

            initial={{
                x: -500,

            }}

            whileInView={{
                x: 0,
            }}
            transition={{
                duration: 1,

            }}
            className='w-screen'
        >
            <div>
                <section class="page-section" id="services">
                    <div class="container px-4 px-lg-5">
                        <h2 class="text-center mt-0">At Your Service</h2>
                        <hr class="divider" />
                        <div class="row gx-4 gx-lg-5">

                            {
                                skills.map((skill)=>{
                                    return <div class="col-lg-3 col-md-6 text-center">
                                    <div class="mt-5">
                                        <div class="mb-2">
                                            {/* <i class="bi-gem fs-1 text-primary"></i> */}
                                            <img className={styled.levelIcon} src={skill.value} />
    
    
    
                                        </div>
                                        <h3 class="mb-2">{skill.key}</h3>
                                        {/* <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p> */}
                                    </div>
                                </div>
                                })
                            }
                             

                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    )
}

export default Skills
