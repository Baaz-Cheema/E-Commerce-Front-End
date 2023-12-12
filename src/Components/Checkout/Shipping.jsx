import styles from './CheckoutNavbar.module.css'

import CartProducts from '../Cart/CartProducts'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { cartActions } from '../../store/CartSlice'
import { useState } from 'react'
import FormComponent from './FormComponent'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


export default function Shipping({ displayPayment }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'auto' })
    }, [])
    const dispatch = useDispatch()
    const [isSelected, setIsSelected] = useState(null)
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const cartProducts = useSelector(state => state.cart.products)
    const truncateStr = (str) => {
        if (str.length > 16) {
            return str.slice(0, 16) + '...'
        }
        return str
    }
    useEffect(() => {
        if (cartProducts.length === 0) {
            navigate('/')
        }
    }, [cartProducts, navigate])

    const add = (id) => {
        dispatch(cartActions.increment(id))
    }
    const remove = (id) => {
        dispatch(cartActions.decrement(id))
    }
    const subTotal = cartProducts.reduce((p, c) => p + c.price * c.amount, 0)

    let shippingCost = 0
    if (isSelected !== null) {
        shippingCost = isSelected === 1 ? 20 : 10
    }

    return <div className={styles.shippingSection}>
        {displayPayment ? <div className={styles.payment}>
            <div>
                <p>Dummy payment for demonstration purposes</p>
                <Link to={'/checkout/confirmation'}><button><i className='bx bx-credit-card' ></i> Pay with Standard Payment</button></Link>
            </div>
        </div> :
            <FormComponent isLoggedIn={isLoggedIn} setIsSelected={setIsSelected} isSelected={isSelected} />}
        <section>
            <h5 style={{ paddingLeft: '2.5rem' }}>Order summary</h5>
            <div className={styles.cartContainer}>
                <CartProducts cartProducts={cartProducts} add={add} remove={remove} truncateStr={truncateStr} />
            </div>
            <hr style={{ marginTop: '2.5rem', color: 'gray' }} />
            <div className={styles.total}>
                <p>Subtotal  <span>${subTotal}.00</span> </p>
                <p>Shipping <span>${shippingCost}.00 </span> </p>
                <hr style={{ marginTop: '2.5rem', color: 'gray' }} />
                <p style={{ fontSize: '1.4rem' }}>Total  <span>${shippingCost + subTotal}</span></p>
            </div>
        </section>
    </div>
}


