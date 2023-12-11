import styles from './Navmenu.module.css'
import { useState } from 'react';

import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { productListActions } from '../../../store/EcommerceStore';

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


export default function Navmenu() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className={styles.menu} onClick={handleShow}>
                <i className='bx bx-menu' ></i>
            </button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className={styles.container}>
                    <Link onClick={handleClose} to={'/account'} > <li className={styles.others}><i className='bx bx-user' ></i> My Account</li></Link>
                    {groups && groups.map((category, index) => (
                        <Item handleClose={handleClose} key={index} group={category.group} items={category.items} />
                    ))}
                    <Link onClick={handleClose} to={'/store'}> <li className={styles.others}><i className='bx bx-shopping-bag' ></i> View All Items <span>sale</span></li></Link>
                    <li className={styles.others}><i className='bx bx-undo'></i> Return Items</li>
                    <li className={styles.contact}>
                        Get in touch
                        <p style={{marginTop:'1rem'}}><i className='bx bxs-phone' ></i>03236333123</p>
                        <p><i className='bx bx-envelope' ></i>chrisbahadur1@gmail.com</p>
                    </li>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}


function Item({ items, group, handleClose }) {
    const [expand, setExpand] = useState(false)
    const expandedStyles = `${styles.category} ${expand ? styles.expanded : ''} `
    const [scope, animate] = useAnimate()
    const cls = `bx bx-${!expand ? 'plus' : 'minus'}`
    const dispatch = useDispatch()

    async function selectCategory(e) {
        let str = e.target.innerText
        let newStr = str.replace(/\s/g, '-'); //because api accepts strings in '-' format
        let url = `https://dummyjson.com/products/category/${newStr}?limit=15&skip=0`
        dispatch(productListActions.setLoading())
        const response = await fetch(url)
        const data = await response.json()
        dispatch(productListActions.setLoading())
        dispatch(productListActions.setBrands('emptyList'))
        dispatch(productListActions.setCategoryProducts(data))
        dispatch(productListActions.setCategory(str))
        handleClose()
    }
    useEffect(() => {
        if (expand) {
            animate(scope.current, { rotate: ['-55deg', '0deg'], opacity: 1 });
        } else {
            animate(scope.current, { rotate: ['55deg', '0deg'], opacity: 1 });
        }

    }, [expand, scope, animate])
    return (
        <>
            <li className={expandedStyles} onClick={() => setExpand(!expand)}>
                {group}
                <motion.i ref={scope} transition={{ duration: '.1' }} className={cls} ></motion.i>
            </li>
            <AnimatePresence>
                {expand && <motion.div className={styles.itemContainer}
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}>
                    {items && items.map(a =>
                        <Link to={'/store/category'} key={a}>
                            <motion.li
                                onClick={selectCategory}
                                className={styles.subItem}
                            >{a}</motion.li>
                        </Link>)}
                </motion.div>}
            </AnimatePresence>
        </>
    )
}