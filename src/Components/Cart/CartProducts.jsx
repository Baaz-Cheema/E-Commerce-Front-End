import { motion, AnimatePresence } from "framer-motion";
import styles from './Cart.module.css';
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { productListActions } from "../../store/EcommerceStore";



const CartProducts = ({ cartProducts, add, remove, truncateStr, close }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function displayDetails(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        dispatch(productListActions.setProductDetails(data))
        navigate('/itemDetail')
        close()
    }
    return (
        <div id={styles.cartProducts}>
            <AnimatePresence mode="wait">
                {cartProducts.length > 0 && <motion.div key={'list'} exit={{ y: -40, opacity: 0 }}>
                    <AnimatePresence>
                        {cartProducts.length > 0 && cartProducts.map((a) =>
                            <motion.div layout key={a.id} exit={{ y: -40, opacity: 0 }} className={styles.hrr}>
                                <div className={styles.products}>
                                    <div onClick={() => displayDetails(a.id)} className={styles.imgContainer}>
                                        <img src={a.images[0]} alt="" />
                                    </div>
                                    <div className={styles.info}>
                                        <div className={styles.title}>
                                            <span>{truncateStr(a.title)}</span>
                                            <span>${a.price * a.amount}.00</span>
                                        </div>
                                        <div className={styles.quantity}>
                                            <span>{a.amount || 0}</span>
                                            <div className={styles.btns}>
                                                <button onClick={() => add(a.id)}><i className='bx bx-plus'></i></button>
                                                <button onClick={() => remove(a.id)}><i className='bx bx-minus'></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ color: 'gray' }} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>}
                {cartProducts.length === 0 && <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={'heading'} className={styles.emptyCart}>Cart is empty</motion.h2>}
            </AnimatePresence>
        </div>
    );
};

export default CartProducts;
