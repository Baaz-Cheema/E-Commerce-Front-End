import styles from './PurchaseHistory.module.css'
import HistoryItemInfo from './HistoryItemInfo'
import OrderSummary from './OrderSummary'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'


export default function HistoryItem({ order, items }) {
    const [isExpanded, setIsExpanded] = useState(false)
    return <div className={styles.historyItem}>
        <div className={styles.innerFirst}>
            <div className={styles.info}>
                <div>
                    <p style={{ fontWeight: '500' }}>Date Placed</p>
                    <p style={{ color: 'grey' }}>{order.date}</p>
                </div>
                <div>
                    <p style={{ fontWeight: '500' }}>Total sum</p>
                    <p style={{ color: 'grey' }}>${order.sum}.00</p>
                </div>
                <div>
                    <p style={{ fontWeight: '500' }}>Order number</p>
                    <p style={{ color: 'grey' }}> {order.orderNumber}</p>
                </div>
            </div>
            <div className={styles.infoTwo}>
                <span>{order.payment}</span>
                <button onClick={() => setIsExpanded(!isExpanded)} className={styles.detailButtonTwo}>Details<motion.i animate={{ rotate: isExpanded ? 90 : 0 }} className='bx bx-chevron-right' ></motion.i></button>
            </div>
        </div>
        <AnimatePresence>
            {isExpanded && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className={styles.details}>
                {items.map((a, i) => <HistoryItemInfo key={i} {...a} />)}
                <OrderSummary />
            </motion.div>}
        </AnimatePresence>
    </div>
}