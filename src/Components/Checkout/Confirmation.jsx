import styles from './CheckoutNavbar.module.css'
import { Link } from 'react-router-dom'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/CartSlice'


export default function Confirmation() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(cartActions.resetCart())
    }, [dispatch])

    return <div className={styles.confirmation} >
        <p><i className='bx bx-check-circle' ></i>Order Summary</p>
        <p>Your order <span>{Math.random().toString(16).slice(2)}</span> has been received! </p>
        <Link to={'/store'}><button >Shop more</button></Link>
    </div>
}