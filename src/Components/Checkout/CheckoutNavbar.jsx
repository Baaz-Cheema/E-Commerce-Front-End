import styles from './CheckoutNavbar.module.css'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


export default function CheckoutNavbar() {
    const location = useLocation()
    const isActive = (path) => path === location.pathname

    return (
        <div className={styles.parent}>
            <div className={styles.container}>
                <ul className={styles.list}>
                    <li className={isActive('/checkout') ? styles.active : ''}>Shipping <i className='bx bx-chevron-right' ></i> </li>
                    <li className={isActive('/checkout/payment') ? styles.active : ''}>Payment <i className='bx bx-chevron-right' ></i> </li>
                    <li className={isActive('/checkout/confirmation') ? styles.active : ''}>Confirmation </li>
                </ul>
                <hr style={{ marginBottom: '5rem', color: 'gray' }} />
                <div className={styles.checkoutSection}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}