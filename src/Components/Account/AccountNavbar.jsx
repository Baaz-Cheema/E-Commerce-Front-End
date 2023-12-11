import styles from './AccountNavbar.module.css'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function AccountNavbar() {
    const location = useLocation()
    const isActive = (path) => location.pathname === path; //manually doing what navlink does
    const username= useSelector(state=>state.auth.username)
    return (
        <div className={styles.header}>
            <h2 className={styles.heading}>My Account</h2>
            <p style={{marginTop:'1rem'}}>Welcome back, {username}</p>
            
            <nav className={styles.navbar}>
                <ul className={styles.links}>
                    <li className={isActive('/account') ? styles.active : ''}>
                        <i className='bx bxs-user-circle'></i> <NavLink to='/account'>My Account</NavLink>
                    </li>
                    <li className={isActive('/account/purchaseHistory') ? styles.active : ''}>
                        <i className='bx bxs-shopping-bag'></i> <NavLink to='purchaseHistory'>Purchase History</NavLink>
                    </li>
                    <li className={isActive('/account/addresses') ? styles.active : ''}>
                        <i className='bx bxs-map'></i> <NavLink to='addresses'>Addresses</NavLink>
                    </li>
                </ul>
               
            </nav>
        </div>
    )
}