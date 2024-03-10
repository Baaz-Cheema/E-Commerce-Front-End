import styles from './HotcollectionItem.module.css'
import { forwardRef } from 'react';

import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { cartActions } from '../../../store/CartSlice';
import { motion } from 'framer-motion';

export default forwardRef(function HotCollectionItem(props, ref) {
    const [Loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const { title, price, thumbnail, discount, displayDetails, product } = props


    const addToCart = () => {
        setLoading(true)
        setTimeout(() => {
            dispatch(cartActions.addItem(product))
            setLoading(false)
        }, 500)
    }
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



    return (
        <div className={`${styles.item}`} ref={ref}>

            <div onClick={displayDetails} className={styles.productImage}>
                <motion.span variants={shineVariants} initial='inital' animate='animate' className={styles.sale}>{Math.floor(discount)}% OFF</motion.span>
                <img src={thumbnail} alt="" />
            </div>
            <div className={styles.info}>
                <h5>{title}</h5>
                {/* <span className={styles.rating}>{rating} <i className='bx bxs-star' ></i></span> */}
                <div className={styles.btn} >
                    <p className={styles.discount}> <span id='price'>${price}</span> <span >${Math.floor(price / (1 - discount / 100))}</span></p>
                </div>
                <motion.button whileTap={{ scale: 0.9 }} disabled={Loading} onClick={addToCart} className={styles.addToCart}><i className='bx bx-plus'></i></motion.button>
            </div>
        </div >
    )
})
