
import { motion } from "motion/react";
import "./Sidebar.scss";
import { useState } from "react";
import { ListItems } from "./ListItems";


function Sidebar() {
    const [open, setopen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)"
            , transition: {
                type: "spring",
                delay: .5,
                damping: 40,
                stiffness: 400
            }
        },
        close: {
            clipPath: "circle(30px at 50px 50px)"
            , transition: {
                delay: .5,
                type: "spring",
                damping: 40,
                stiffness: 400
            }
        },
    }
  
    return (
        <motion.div animate={open ? "open" : "close"} className="Sidebar">
            <motion.div variants={variants}
                className="Sidebar__content"
            >
                <ListItems open={open} />
            </motion.div>
            <motion.button
                className="Sidebar__burger"
                onClick={() => { setopen(prev => !prev) }}
            >
                <svg width="23" height="23" viewBox="0 0 24 24">
                    {/* Top Line */}
                    <motion.rect
                        width="24"
                        height="2"
                        rx="1"
                        fill="#000"
                        animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 4 }}
                        transition={{ duration: 0.3 }}
                    />
                    {/* Middle Line */}
                    <motion.rect
                        width="24"
                        height="2"
                        rx="1"
                        fill="#000"
                        animate={open ? { opacity: 0 } : { opacity: 1, y: 11 }}
                        initial={{ y: 11 }}
                        transition={{ duration: 0.3 }}
                    />
                    {/* Bottom Line */}
                    <motion.rect
                        width="24"
                        height="2"
                        rx="1"
                        fill="#000"
                        animate={open ? { rotate: -45, y: 8 } : { rotate: 0, y: 18 }}
                        transition={{ duration: 0.3 }}
                    />
                </svg>
            </motion.button>
        </motion.div >
    );
}


export default Sidebar
