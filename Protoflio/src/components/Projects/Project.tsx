import React, { useRef } from 'react';
import './Project.scss';
import { useScroll, motion, useTransform } from 'framer-motion';

const projects = [
    {
        title: "webFlow portfolio",
        img:"Screenshot 2025-06-26 124753.png" ,
        desc: "This is a full Webflow website with animation.",
        Demo: "https://khaleds-dynamite-site-01bb1b.webflow.io",
    },
    {
        title: "Portfolio with React",
        img: "Screenshot 2025-06-26 124851.png",
        desc: "Built with React and Framer Motion for smooth animations.",
        Demo: "https://khaleds-dynamite-site-01bb1b.webflow.io",
    },
    {
        title: "Social Media with Pure JS",
        img: "Screenshot 2025-06-26 125145.png",
        desc: "JavaScript + Bootstrap + Axios for a simple social media UI.",
        Demo: "https://github.com/khaledabosaeed/social-media-",
    },
];

export const Item = ({ item, index }: { item: typeof projects[0], index: number }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Balanced parallax transforms - slower, more natural movement
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const descY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const buttonY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

    // Subtle rotation effect for images
    const imageRotate = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 2 : -2]);

    // Gentle scale effect for the entire item
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

    // Opacity effect
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <motion.section
            className="Item"
            ref={ref}
            style={{ scale, opacity }}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.div
                className="image-container"
                style={{ y: imageY, rotate: imageRotate }}
            >
                <motion.img
                    src={item.img}
                    alt={item.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div>

            <div className="text">
                <motion.h1
                    style={{ y: titleY }}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.2 }}
                >
                    {item.title}
                </motion.h1>

                <motion.p
                    style={{ y: descY }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {item.desc}
                </motion.p>

                <motion.button
                    type="button"
                    style={{ y: buttonY }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <a href={item.Demo} target="_blank" rel="noopener noreferrer">
                        Go to Project
                    </a>
                </motion.button>
            </div>
        </motion.section>
    );
};

function Project() {
    return (
        <div className="project">

            <div className="projects-container">
                {projects.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: i * 0.2 }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <Item item={item} index={i} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Project;