import { Link } from 'react-router-dom'

import styles from './CarouselItem.module.css'

export default function CarouselItem({ title, para, img, butn }) {
    return (
        <>
            <div className={styles.carouselItem}>
                <div className={styles.textContainer}>
                    <h1>{title}</h1>
                    <p>{para}</p>
                    {butn && <Link to={'/store'}><button> Shop Now</button></Link> }
                </div>
                <div className={styles.imageContainer}>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    )
}
