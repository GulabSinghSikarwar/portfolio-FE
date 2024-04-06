
import { delay, motion } from 'framer-motion'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {experience} from '../../helpers/constants'
import  './verticalComponents.css'
export default function VerticalTimeline() {
    return (
        <motion.div
        initial={{
            x: -500,

        }}

        whileInView={{
            x: 0,
        }}
        transition={{
            duration: 1
        }}
        className='w-screen motion-div-container'
        >
            <div>
                <h4 className='motion-div-text'> DEVELOPMENT Experience AND Internship </h4>
            </div>
            <div> <Timeline>
                {
                    experience.map((work)=>{
                        return <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <h4 className='timeline_content' > {work}

                            </h4>
                        </TimelineContent>
                    </TimelineItem>
                    })
                }
            </Timeline></div>
        </motion.div>
    );
}