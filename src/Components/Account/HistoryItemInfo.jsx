import styles from './PurchaseHistory.module.css'

export default function HistoryItemInfo({src, price, status, title}) {
    return (
        <div className={styles.orderItem}>
            <div className={styles.imgContainer}>
                <img src={src} alt="" />
            </div>
            <div className={styles.itemInfo}>
                <p style={{ fontWeight: '500' }}>{title}</p>
                <p>${price}.00</p>
                <p>{status}</p>
            </div>
            <hr />
        </div>
    )
}