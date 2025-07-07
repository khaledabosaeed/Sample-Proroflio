import "./land.scss";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

function Secondland() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"], // smoother trigger
    });

    // Increase scale range for more noticeable effect
    const rawOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const rawScale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    // Apply smooth spring motion
    const opacity = useSpring(rawOpacity, {
        stiffness: 50,
        damping: 20,
    });

    const scale = useSpring(rawScale, {
        stiffness: 50,
        damping: 20,
    });

    return (
        <div className='Land'>
            <motion.h2
                ref={ref}
                style={{
                    opacity,
                    scale,
                    originX: 0.5,
                    originY: 0.5,
                }}
            >
                Now <br />Projects
            </motion.h2>
        </div>
    );
}

export default Secondland;
