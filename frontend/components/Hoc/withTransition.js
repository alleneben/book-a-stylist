import {
  AnimatePresence,
  motion,
} from 'framer-motion';

const variants = {
    in: {
        opacity: 1,
        x: -300
    },
    out: {
        opacity: 0,
        x: 300
    },
    end: {
        x: 0,
        opacity: 1
    }
}
const PageTransition = ({ children }) => (
    <AnimatePresence>
        <motion.div initial='out'
            animate='end'
            exit='out' variants={variants}>
            {children}
        </motion.div>
    </AnimatePresence>
)

export default PageTransition