import { motion, stagger } from 'motion/react';
import './hero.scss'

export const Hero = () => {
    const textVariant = {
        hidden: {
            x: -100, // Start 100px to the left
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
                delay: 0.5
            }
        }
    };
    const slider = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            },
        },
    };
    return (
        <div className='hero'>

            < motion.div
                className="hero-text"
                initial="hidden"
                animate="visible"
                variants={textVariant}
            >
                <p>Khaled Balata</p>
                <h2>Web devloper  <br />and  webflow desinger</h2>
                <div className="button-wrap">
                    <button className="first">See the last works </button>
                    <button className="second">Contact with us  </button>
                </div>
                <motion.div
                    className="arrow-down"
                    initial={{ y: 30, x: 100 }}
                    animate={{ y: [0, 80, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M12 5v14M12 19l-7-7m7 7l7-7"
                            stroke="#38bdf8"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </motion.div>
                <motion.div className="textButtom"
                    variants={slider} initial={"initial"} animate={"animate"}>
                    Bulid with React
                </motion.div>


            </motion.div>
            <div className="image-box">
                <img src="WhatsApp Image 2025-05-14 at 17.02.30_85d77975.jpg" alt='' className='image' />
            </div>
        </div >
    )
}
