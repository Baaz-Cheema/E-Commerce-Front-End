import { useState, useEffect } from 'react';

import FlashSaleItem from './FlashSaleItem';
import groupStyles from './FlashSale.module.css'
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { productListActions } from '../../../store/EcommerceStore';
import { useNavigate } from 'react-router-dom';

export default function FlashSale() {
    const [products, setProducts] = useState([])
    const [minutes, setMinutes] = useState(35)
    const [seconds, setSeconds] = useState(59)
    const itemRef = useRef()
    const scrollRef = useRef()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    async function displayDetails(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        dispatch(productListActions.setProductDetails(data))
        return navigate('/itemDetail')
    }

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('https://dummyjson.com/products?limit=6&skip=67')
            const data = await response.json()
            setProducts(data.products)
        }
        fetchProducts()
    }, [])

    useEffect(() => {
        const timeInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(prev => prev - 1)
            }
            else if (seconds === 0) {
                setSeconds(59)
                if (minutes > 0) {
                    setMinutes(prev => prev - 1)
                }
            }
        }, 1000)
        return () => clearInterval(timeInterval)
    }, [minutes, seconds])


    return (
        <div className={groupStyles.container}>
            <div className={groupStyles.heading}>
                <div>
                    <h2>Flash Sale <i style={{ color: 'orange' }} className='bx bxs-bolt' ></i></h2>
                    <p>Get em before they are gone</p>
                </div>
                <div>
                    <span><b>Ends in:</b></span>
                    <span className={groupStyles.time}><span>01</span>:<span> {minutes}</span>: <span>{seconds}</span></span>
                </div>

            </div>
            <div className={groupStyles.parent}>
                <div className={groupStyles.sale}>
                    <div className={groupStyles.info}>
                        <h3>Flash Sale <i style={{ color: 'orange' }} className='bx bxs-bolt' ></i></h3>
                        <p >Grab your favourite items here. <br /> All of these items are on sale so grab them before they are sold out!</p>
                        <div className={groupStyles.timer}>
                            <p><b> Time Left:</b></p>
                            <p className={groupStyles.time}><span>01</span>:<span> {minutes}</span>: <span>{seconds}</span></p>
                        </div>
                    </div>
                    <Link to={'/store'} style={{ textDecoration: 'none' }}>
                        <button id={groupStyles.saleP}>See all Items <i className='bx bx-chevron-right' ></i></button>
                    </Link>
                </div>
                <div ref={scrollRef} className={groupStyles.group + ' snaps'}>
                    {products && products.map((item, i) => <FlashSaleItem ref={itemRef}
                        stock={item.stock}
                        key={i}
                        title={item.title}
                        img={item.images[0]}
                        price={item.price}
                        discountPercentage={item.discountPercentage}
                        displayDetails={() => displayDetails(item.id)} />)}
                </div>
            </div>
        </div>
    )
}