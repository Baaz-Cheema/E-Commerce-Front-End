import styles from './PurchaseHistory.module.css'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
export default function OrderSummary() {
    const [isExpanded, setIsExpanded] = useState(false)
    return (
        <div className={styles.orderSummaryWrapper}>
            <button onClick={() => setIsExpanded(!isExpanded)} className={styles.detailButton}>Order Summary <motion.i animate={{ rotate: isExpanded ? 90 : 0 }} className='bx bx-chevron-right' ></motion.i></button>
            <AnimatePresence>
                {isExpanded && <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={styles.orderSummary}>

                    <h6>Order summary</h6>
                    <span></span>
                    <span>Item(s) Subtotal:</span>
                    <span className={styles.prices}>$10.00</span>
                    <span>Shipping & handling:</span>
                    <span className={styles.prices}>$86.38</span>
                    <span>Total before tax:</span>
                    <span className={styles.prices}>$15.30</span>
                    <span>Estimated tax:</span>
                    <span className={styles.prices}>$101.68</span>
                    <span>Total:</span>
                    <span className={styles.prices}>$301.00</span>
                    <span>Applied coupons:</span>
                    <span className={styles.prices}>$0.00</span>
                    <span>Grand total:</span>
                    <span className={styles.prices}>$503.00</span>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}