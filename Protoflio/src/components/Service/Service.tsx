import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "./Service.scss"

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.9,
        rotateX: 10
    },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            type: "spring",
            stiffness: 100,
            damping: 12
        },
    }),
};
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const Service = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax effects
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div
            className="Service"
            ref={ref}
            style={{ opacity, scale }}
        >
            {/* Background parallax element */}
            <motion.div
                className="bg-decoration"
                style={{ y }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.1 }}
                transition={{ duration: 1.5 }}
            />

            {/* Title and Subtitle */}
            <motion.p
                className="special-header"
                initial={{ y: -50, opacity: 0, rotateX: -15 }}
                whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 100
                }}
                viewport={{ once: true, amount: 0.3 }}
            >
                Build Your Product
            </motion.p>

            <motion.header
                className="section-header"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                    duration: 1.2,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    delay: 0.2
                }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="text">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        Build Websites with Modern Technology
                    </motion.span>
                    <br />
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                    >
                        Stay Ahead of the Curve!
                    </motion.span>
                </h1>
            </motion.header>

            {/* Cards Container */}
            <motion.div
                className="Srvice-contianr"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {[{
                    src: "ChatGPT Image 26 يونيو 2025، 11_52_59 ص.png",
                    title: "Custom React Web Applications",
                    desc: "Build dynamic and scalable web apps using React.js — optimized for performance, reusability, and modern UX.",
                },
                {
                    src: "webflow@logotyp.us.png",
                    title: "High-End Webflow Designs",
                    desc: "Visually rich and responsive websites created in Webflow — perfect for startups, portfolios, and landing pages.",
                },
                {
                    src: "ChatGPT Image 26 يونيو 2025، 11_55_15 ص.png",
                    title: "WordPress Sites That Convert",
                    desc: "Professionally built WordPress sites that are SEO-friendly, easy to manage, and tailored to your brand.",
                }].map((item, i) => (
                    <motion.div
                        className="service-card"
                        key={i}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={i}
                        whileHover={{
                            scale: 1.08,
                            y: -10,
                            rotateY: 5,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <motion.img
                            src={item.src}
                            alt={item.title}
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: i * 0.1 + 0.5,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                                transition: { duration: 0.2 }
                            }}
                        />
                        <motion.h2
                            className="card-head"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 + 0.7 }}
                        >
                            {item.title}
                        </motion.h2>
                        <motion.p
                            className="service-desc"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 + 0.9 }}
                        >
                            {item.desc}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div> 
        
    );
};

export default Service;