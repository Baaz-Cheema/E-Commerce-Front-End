import { useState } from "react";
import { motion } from "framer-motion";
import styles from './NavCategoires.module.css'


export default function DropItem({ category, selectCategory, childVariants,delay }) {
    const [show, setshow] = useState(false)

    return (
        <motion.div variants={childVariants} transition={{delay:delay}}  className={styles.dropItem} onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
            <h6 className={styles.categoryTitle}>{category.group}<i className='bx bx-chevron-right'></i></h6>
            {show &&
                <ul className={styles.list}>
                    {category.items.map((item, i) => (
                        <li onClick={selectCategory} key={i}>{item}</li>
                    ))}
                </ul>
            }
        </motion.div>
    )
}
