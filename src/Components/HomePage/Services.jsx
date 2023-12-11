import styles from './Services.module.css'

export default function Services() {
    return (
        <>
            <div className={styles.services}>
                <div className={styles.service}>
                    <div className={styles.icon}>
                        <i className='bx bxs-truck' ></i>
                    </div>
                    <div className={styles.info}>
                        <h6>Free Shipping</h6>
                        <p>For all orders over 120$</p>
                        <a href="">Learn more<i className='bx bx-chevron-right' ></i></a>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.icon}>
                        <i className='bx bxs-dollar-circle' ></i>
                    </div>
                    <div className={styles.info}>
                        <h6>Safe Payment</h6>
                        <p>Secured by the latest encryption methods</p>
                        <a href="">Learn more<i className='bx bx-chevron-right' ></i></a>
                    </div>
                </div>
                <div className={styles.service}>
                    <div className={styles.icon}>
                        <i className='bx bx-headphone' ></i>
                    </div>
                    <div className={styles.info}>
                        <h6>24/7 Chat Support</h6>
                        <p>We are dedicated to listening to your concerns</p>
                        <a href="">Learn more<i className='bx bx-chevron-right' ></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}