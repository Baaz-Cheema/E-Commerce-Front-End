import { useNavigate } from 'react-router-dom';
import styles from './NavCategoires.module.css'
import { productListActions } from '../../../store/EcommerceStore';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import DropItem from './DropItem';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
const groups = [
    {
        group: "Electronics",
        items: ["Smartphones", "Laptops"]
    },
    {
        group: "Beauty & Personal Care",
        items: ["Fragrances", "Skincare"]
    },
    {
        group: "Groceries",
        items: ["Groceries"]
    },
    {
        group: "Home & Living",
        items: ["Home Decoration", "Furniture", "Lighting"]
    },
    {
        group: "Women's Fashion",
        items: ["Tops", "Womens Dresses", "Womens Shoes", "Womens Watches", "Womens Bags", "Womens Jewellery"]
    },
    {
        group: "Men's Fashion",
        items: ["Mens Shirts", "Mens Shoes", "Mens Watches"]
    },
    {
        group: "Accessories",
        items: ["Sunglasses"]
    },
    {
        group: "Automotive & Motorcycles",
        items: ["Automotive", "Motorcycle"]
    }
];


export default function NavCategories() {
    const navigate = useNavigate()
    const location = useLocation()
    const listItem = {
        initial: { scale: .9 },
        animate: { scale: 1 },
    };
    const [show, setShow] = useState(false)
    const dispatch = useDispatch()
    async function selectCategory(e) {
        let str = e.target.innerText
        setShow(false)
        let newStr = str.replace(/\s/g, '-'); //because api accepts strings in '-' format
        let url = `https://dummyjson.com/products/category/${newStr}?limit=15&skip=0`
        dispatch(productListActions.setLoading())
        const response = await fetch(url)
        const data = await response.json()
        dispatch(productListActions.setLoading())
        dispatch(productListActions.setBrands('emptyList'))
        dispatch(productListActions.setCategoryProducts(data))
        dispatch(productListActions.setCategory(str))
        if (location.pathname !== '/store/category') {
            navigate('/store/category')
        }
    }
    const childVariants = {
        initial: { x: -15, opacity: 0 }, animate: { x: 0, opacity: 1 },

    }
    return <div id={styles.container}>
        <span className={styles.ctg} style={{ color: show ? 'var(--main-bg-color)' : '' }} onClick={() => setShow(prev => !prev)} onMouseEnter={() => setShow(true)}>
            Categories <span className={styles['select-arrow']}><motion.i animate={{ rotate: show ? '180deg' : 0 }} className='bx bx-chevron-up'></motion.i></span>
        </span>
        <AnimatePresence>
            {show && <motion.div onMouseLeave={() => setShow(false)} variants={listItem} initial='initial' animate='animate' exit='exit' className={styles.inner}>
                <motion.div variants={childVariants} initial='initial' animate='animate' className={styles.hello}>
                    {groups && groups.map((category, index) => (
                        <DropItem childVariants={childVariants} delay={index * 0.05} key={index} category={category} selectCategory={selectCategory} />
                    ))}
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    </div >
}
