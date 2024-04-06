import React from 'react'
import { motion } from 'framer-motion'
import level1 from '../../components/resources/assets/badges/level1.png'
import level2 from '../../components/resources/assets/badges/level2.png'
import level3 from '../../components/resources/assets/badges/level3.png'
import level4 from '../../components/resources/assets/badges/level4.png'
import styled from './achivements.module.css'

function Achievements() {
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
                <div>
                    <section class="page-section" id="services">
                        <div class="container px-4 px-lg-5">
                            <h2 class="text-center mt-0">Some of the Achievements </h2>
                            <hr class="divider" />
                            <div class="row gx-4 gx-lg-5">
                                <div class="col-lg-3 col-md-6 text-center">
                                    <div class="mt-5">
                                        <div class="mb-2">
                                            {/* <i class="bi-gem fs-1 text-primary"></i> */}
                                            <img className={styled.levelIcon} src={level1} />



                                        </div>
                                        <h3 class="mb-2">First Accepted Request </h3>
                                        {/* <p class="text-muted mb-0">Our themes are updated regularly to keep them bug free!</p> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 text-center">
                                    <div class="mt-5">
                                        <div class="mb-2">
                                            {/* <i class="bi-laptop fs-1 text-primary"></i> */}
                                            <img className={styled.levelIcon} src={level2} />

                                        </div>
                                        <h3 class="mb-2">Up to Date</h3>
                                        {/* <p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 text-center">
                                    <div class="mt-5">
                                        <div class="mb-2">
                                            {/* <i class="bi-globe fs-1 text-primary"></i> */}
                                            <img className={styled.levelIcon} src={level3} />


                                        </div>
                                        <h3 class=" mb-2">Ready to Publish</h3>
                                        {/* <p class="text-muted mb-0">You can use this design as is, or you can make changes!</p> */}
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 text-center">
                                    <div class="mt-5">
                                        <div class="mb-2">
                                            {/* <i class="bi-heart fs-1 text-primary"></i> */}
                                            <img className={styled.levelIcon} src={level4} />

                                        </div>
                                        <h3 class=" mb-2 ">Made with Love</h3>
                                        {/* <p class="text-muted mb-0">Is it really open source if it's not made with love?</p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </div>
        </motion.div>

    )
}

export default Achievements
