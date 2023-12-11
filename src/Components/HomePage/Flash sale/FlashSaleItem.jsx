import styles from './FlashSaleItem.module.css'
import { motion } from 'framer-motion';
import { ProgressBar } from 'react-bootstrap';
import { forwardRef } from 'react';

export default forwardRef(function FlashSaleItem(props, ref) {
    const { title, price, img, discountPercentage,displayDetails} = props
    const discount = Math.floor(price / (1 - discountPercentage / 100))
    const shineVariants = {
        initial: {
            backgroundPosition: ['-10%', '0'],
        },
        animate: {
            backgroundPosition: ["-100% 0", "200% 0"],
            transition: {
                duration: 1,
                repeat: Infinity,
            },
        },
    };
    const sold = price + 9;
    function truncateStr(str) {
        return str.slice(0, 29)
    }
    return (
        <div ref={ref} className={`${styles.item}`} >
            <div onClick={displayDetails} className={styles.productImage}>
                <img src={img} alt="" />
            </div>
            <div className={styles.info}>
                <h6>{truncateStr(title)}</h6>
                <div className={styles.price}>
                    <p className={styles.fullPrice}>${price}</p>
                    <div className={styles.discount}>
                        <p>${discount}</p>
                        <motion.p style={{ marginLeft: '.5rem' }} className={styles.sale} variants={shineVariants} initial='initial' animate='animate'>-{discountPercentage}%</motion.p>
                    </div>
                </div>
                <div className={styles.bar}>
                    <ProgressBar variant='danger' now={sold} label={`${sold} sold`} />
                </div>
            </div>
        </div >
    )
})