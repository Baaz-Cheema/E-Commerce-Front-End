import styles from './ItemDetail.module.css'
import ItemReviews from './ItemReviews'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/CartSlice'
import { StarItem } from '../StoreItems/ShopItem'

export default function ItemDetail() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const product = useSelector(state => state.productList.selectedProduct)
    const cartItems = useSelector(state => state.cart.products)
    const filterItem = cartItems.filter(a => a.id === product.id)
    const itemQuantity = filterItem.length > 0 ? filterItem[0].amount : null
    const stars = [1, 2, 3, 4, 5]
    const [url, setUrl] = useState('')
    useEffect(() => {
        setUrl(product.images[0]) //because thumbnail was not being updated by default
    }, [product])

    const addToCart = () => {
        setLoading(true)
        setTimeout(() => {
            dispatch(cartActions.addItem(product))
            setLoading(false)
        }, 500)
    }
    return (
        <div className={styles.itemDetailContainer}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <div className={styles.imgGroup}>
                        {product.images.map((a, i) => <div onMouseEnter={() => setUrl(a)} className={`${styles.images} ${a === url && styles.imgHover}`} key={i}>
                            <img src={a} alt="" />
                        </div>)}
                    </div>
                    <div className={styles.image}>
                        <img src={url} alt="" />
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.description}> {product.description}</p>
                    <p style={{ display: 'flex', alignItems: 'center' }}> {stars.map((star, i) =>
                        <StarItem key={i} item={star} rating={product.rating} />)} <span style={{ color: 'blue', fontSize: '.9rem', marginLeft: '.5rem' }}>{product.rating}</span></p>
                    <div className={styles.price}>
                        <span>${product.price}.00</span>
                        <button disabled={loading} className={styles.addCart} onClick={addToCart}>
                            {itemQuantity ? <>
                                <i className='bx bx-check'></i> {itemQuantity} in Cart
                            </> : 'Add To Cart'}
                        </button>
                    </div>
                    <span className={styles.serial}>{product.id}WO12M<span>In stock</span> <p className={styles.share}> <i className='bx bxs-heart' ></i> <i className='bx bxs-share-alt' ></i> </p>  </span>
                    <hr />
                    <div className={styles.return}>
                        <span>Shipping and returns</span>
                        <p>
                            Standard shipping: 3 - 5 working days. Express shipping: 1 - 3 working days.
                            Shipping costs depend on delivery address and will be calculated during checkout.
                            Returns are subject to terms. Please see the returns page for further information.</p>
                    </div>
                </div>
            </div>
            <ItemReviews />
        </div>
    )
}