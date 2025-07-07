import { motion } from 'motion/react';
const links = ["Home", "Service", "Pojects", "Contact"];

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
};
const itemVarinte = {
    open: {
        y: 0,
        opcity: 1,
        transition: {

        }
    },
    close: {
        opcity: 0,
        y: 20,
    },

}
export const ListItems = ({ open }: { open: boolean }) => {
    return (
        <motion.div className="Links" variants={variants}
        >
            {links.map((item, index) =>
                <motion.a
                    href={`#${item}`}
                    key={index}
                    variants={itemVarinte}
                    initial={"close"}
                    animate={open ? "open" : "close"}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: .75 }}
                >{item}
                </motion.a>
            )}

        </motion.div>)
}
