import { motion } from 'framer-motion'
import {projects} from '../../helpers/constants'
function Portfolio() {
    return (
        <div>
            <div id="portfolio">
                <div class="container-fluid p-0">
                    <div class="row g-0">
                        {projects.map((project)=>{
                           return  <div class="col-lg-4 col-sm-6">
                            <a class="portfolio-box" href={project.youtube} title={project.title}>
                                <img class="img-fluid" src={project.image} alt="..." />
                                <motion.div initial={{opacity: 0,}}
                                whileHover={{scale: 1,opacity: 1, }} 
                                transition={{duration: 0.5}}
                                class="portfolio-box-caption">
                                    <div class="project-category text-white-50"> </div>
                                    <div class="project-name">{project.title} </div>
                                </motion.div>
                            </a>
                        </div>  
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
