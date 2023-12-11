import { motion, AnimatePresence } from "framer-motion";
import styles from './Cart.module.css';

const CartProducts = ({ cartProducts, add, remove, truncateStr }) => {
    return (
        <div id={styles.cartProducts}>
            <AnimatePresence>
                {cartProducts.length > 0 && cartProducts.map((a) =>
                    <motion.div key={a.id} exit={{ y: -40, opacity: 0 }} className={styles.hrr}>
                        <div className={styles.products}>
                            <div className={styles.imgContainer}>
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
                {cartProducts.length === 0 && <motion.h2 key={'heading'} animate={{ y: [60, 1] }} className={styles.emptyCart}>Cart is empty</motion.h2>}
            </AnimatePresence>
        </div>
    );
};

export default CartProducts;
