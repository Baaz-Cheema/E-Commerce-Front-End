import styles from './AddressModal.module.css'
import { motion } from 'framer-motion'

import { createPortal } from 'react-dom'

export default function Modal({setIsOpen, children}) {
    return createPortal(<>
        <motion.div
            animate={{ opacity: [0, 1] }}
            exit={{ opacity: 0 }}
            className={styles.backdrop}
            onClick={() => setIsOpen(false)}
        />
        <motion.dialog
            open
            initial={{ scale: .9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: .9, opacity: 0 }}
            transition={{ type: "spring", duration: .5 }}
            className={styles.modal}>

            {children}
            
        </motion.dialog>
    </>, document.getElementById('modal'))
}