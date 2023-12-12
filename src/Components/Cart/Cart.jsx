import styles from './Cart.module.css'

import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { cartActions } from '../../store/CartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CartProducts from './CartProducts';

export default function Cart({ cartStyle, iconStyle }) {
    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.products)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cartItemAmount = cartProducts.reduce((p, c) => p + c.amount, 0)
    const truncateStr = (str) => {
        if (str.length > 16) {
            return str.slice(0, 16) + '...'
        }
        return str
    }
    const add = (id) => {
        dispatch(cartActions.increment(id))
    }
    const remove = (id) => {
        dispatch(cartActions.decrement(id))
    }
    const subTotal = cartProducts.reduce((p, c) => p + c.price * c.amount, 0)

    return (
        <>
            <span className={cartStyle} onClick={handleShow} >
                <i className='bx bxs-cart'></i>
                {cartProducts.length > 0 && <motion.span animate={{ scale: [1.4, 1] }} key={cartItemAmount} className={iconStyle}>{cartItemAmount}</motion.span>}
            </span>
            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.wrapper}>
                    <CartProducts close={handleClose} cartProducts={cartProducts} add={add} remove={remove} truncateStr={truncateStr} />
                    <div className={styles.checkout}>
                        <div>
                            <div className={styles.subtotal}>
                                <p>Subtotal</p>
                                <p>${subTotal}.00</p>
                            </div>
                            <p style={{ padding: 0, color: 'gray' }}>Shipping will be calculated at checkout</p>
                        </div>
                        <Link to={'/checkout'}> <button onClick={handleClose}>Proceed to checkout</button></Link>
                    </div>
                </Offcanvas.Body >
            </Offcanvas>
        </>
    );



}