import React from 'react'
import img from '../components/resources/assets/img.jpg'
import { motion } from 'framer-motion'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircles'
function Header() {
    const [text, count] = useTypewriter({
        words: [
            "Hey  !  , I am Gulab  Singh ",
            "Ordinary Boy Who Love to Write < Code />",
        ]
        , loop: true,
        delaySpeed: 2000,


    })

    return (
        <motion.div
            initial={{
                opacity: 0,

            }}
            whileInView={{
                scale: 1,

                opacity: 1,

            }}
            transition={{
                duration: 1.5
            }}
        >
            <header class="masthead w-screen " style={{
                height:"fit-content",
                padding:"10rem 10rem"
            }} >
                <div class="container px-4 px-lg-5 h-100 w-screen" >

                    <div
                    style={{
                        textAlign:"center",
                        marginBottom:"3rem"
                        
                    }}
                    
                    >
                        <img src={img}
                            style={{
                                width: "30rem",
                                borderRadius: "45%",
                                height: "25rem"

                            }}
                        />
                    </div>


                    <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                        <div class="col-lg-8 align-self-end">
                            <h1 class="text-white  "> <span style={{
                                textTransform:"uppercase" ,
                                fontWeight:"400",
                                fontSize:"2rem",
                                letterSpacing:"2px"
                            }}>{text}</span>
                                <Cursor cursorColor='white' /></h1>
                            <hr class="divider" />
                        </div>
                        <div class="col-lg-8 align-self-baseline">
                            {/* <p class="text-white-75 mb-5">Start Bootstrap can help you build better websites using the Bootstrap framework! Just download a theme and start customizing, no strings attached!</p>
                            <a class="btn btn-primary btn-xl" href="#about">Find Out More</a> */}
                        </div>
                    </div>
                </div>
            </header>
        </motion.div>
    )
}

export default Header
