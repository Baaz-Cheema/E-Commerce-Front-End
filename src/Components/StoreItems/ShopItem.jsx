import styles from './ShopItem.module.css'
import { motion } from 'framer-motion'



export function StarItem({ item, rating }) {
    const flooredRating = Math.floor(rating)
    if (item === flooredRating) {
        return <i style={{ color: 'gold', border: '0 px solid gold' }} className='bx bxs-star-half'></i>
    }
    if (item > rating) {
        return <i className='bx bx-star' style={{ color: 'gold' }} ></i>
    }
    return <i style={{ color: `${item < rating && 'gold'}` }} className='bx bxs-star' ></i>
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

export default function ShopItem({ title, image, displayDetails, price, discountPercentage }) {
    const random = Math.floor(Math.random() * 5) + 1
    const stars = [1, 2, 3, 4, 5]
    const showDiscount = discountPercentage > 13
    return <div className={styles.item} onClick={displayDetails}>
        {showDiscount && <motion.span
            className={styles.sale}
            initial={shineVariants.initial}
            animate={shineVariants.animate}>
            {showDiscount && Math.floor(discountPercentage)}%  OFF
        </motion.span>}
        <div className={styles.imgContainer}>
            <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <div className={styles.info}>
            <span>${price}.00</span>
            <span>
                {stars.map((star, i) =>
                    <StarItem key={i} item={star} rating={random} />)}
            </span>
        </div>
    </div>
}