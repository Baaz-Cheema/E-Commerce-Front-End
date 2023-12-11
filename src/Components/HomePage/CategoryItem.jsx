import styles from './CategoryItem.module.css'


export default function CategoryItem({ title, quantity, image, func,}) {
    return (
        <div className={styles.categoryItem} onClick={()=>func(title)}>
            <div>
                <h6>{title}</h6>
                <p>{quantity} Products</p>
                <a href="">Shop Now <i className='bx bxs-right-arrow'></i></a>
            </div>
            <div className={styles.imgContainer}>
                <img src={image} />
            </div>
        </div>
    )
}