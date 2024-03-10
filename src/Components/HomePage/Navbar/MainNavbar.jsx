import styles from './MainNavbar.module.css'
import { useState, useEffect } from 'react'
import NavCategories from './NavCategories'
import Cart from '../../Cart/Cart'
import { useSelector } from 'react-redux/es/hooks/useSelector'

import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import Navmenu from './Navmenu'
import SearchForm from './SearchForm'

export default function MainNavbar() {
    const products = useSelector(state => state.productList.allProducts)
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const [scrolled, setScrolled] = useState(false)
    const [hehe, sethehe] = useState(false)

    const navigate = useNavigate();
    const [showBox, setshowBox] = useState(false)

    function closeBox() {
        setshowBox(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            let scrollPosition = window.scrollY;
            if (scrollPosition > 5) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <motion.div className={`${styles.navContainer} ${scrolled && styles.scrolled}`}>
            <nav className={`${styles.mainNav}`}>
                <div className={styles.heading} >
                    <Navmenu />
                    <h3 onClick={() => navigate('/')}>  Almari </h3> <span style={{ fontSize: '1rem', marginBottom: '1rem' }}>&trade;</span>
                    <div className={styles.ctg} style={{ height: '100%' }} onMouseEnter={() => sethehe(true)} onMouseLeave={() => sethehe(false)}>
                        <NavCategories />
                    </div>
                    <Link className={styles.navItem} to={'/store'}>Shop</Link>
                    <Link className={styles.navItem} to={'/store'}>Offers</Link>
                </div>
                <div className={styles.signup}>
                    <motion.div whileTap={{ scale: 1.1 }} onClick={() => setshowBox(!showBox)} className={styles.searchBox}>
                        <button><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                            <path fill={showBox ? 'var(--main-bg-color)' : 'var(--bs-heading-color)'}
                                d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                        </svg></button>
                    </motion.div>
                    <AnimatePresence>
                        {showBox &&
                            <motion.div initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} className={styles.searchFormTablet}>
                                <SearchForm closeBox={closeBox} products={products} />
                            </motion.div>}
                    </AnimatePresence>
                    <div className={styles.searchFormDesktop}>
                        <SearchForm products={products} />
                    </div>
                    <Cart cartStyle={styles.cart} iconStyle={styles.cartNumber} />

                    {isLoggedIn ? <Link className={styles.account} to={'/account'}><i className='bx bxs-user' ></i></Link>
                        : <Link to={'/login'}><button className={styles.btn}>Sign in</button></Link>
                    }
                </div>
            </nav>
            <div className={`${styles.categoryBox}`}>
                <NavCategories />
            </div>
        </motion.div>
    )
}