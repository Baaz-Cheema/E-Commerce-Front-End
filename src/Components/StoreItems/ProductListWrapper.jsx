import HeadingFilter from "./HeadingFilter";
import { Spinner } from "react-bootstrap";
import SideBar from "./SideBar";
import styles from './AllProducts.module.css'
import ShopItem from "./ShopItem";
import { motion } from "framer-motion";



export default function ProductListWrapper({ products, isLoading, displayDetails, nextItems, pageNum, allBrands, title, setProductsPerPage }) {
    const dropdownVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <section className={styles.mainSection}>
            <HeadingFilter brands={allBrands} title={title} />
            <form action="" className={styles.container}>
                {isLoading && <div className={styles.backdrop}>
                    <Spinner animation='border' variant='primary' />
                </div>}
                <div className={styles.sidebar}>
                    <SideBar brands={allBrands} />
                </div>
                <div className={styles.items}>
                    {products && products.map((item) =>
                        <ShopItem key={item.id}
                            discountPercentage={item.discountPercentage}
                            title={item.title}
                            image={item.images[1] ? item.images[1] : item.thumbnail}
                            price={item.price}
                            rating={item.rating}
                            displayDetails={() => displayDetails(item.id)} />)}
                </div>
            </form>
            <div className={styles.nav}>
                <p>Showing products 1 to {products ? products.length : 0}</p>
                <div>
                    <motion.select disabled={ products && products.length < 10} variants={dropdownVariants} initial='hidden' animate='visible' onChange={setProductsPerPage} name="" id="">
                        <option value="15">15 per Page</option>
                        <option value="50">50 per Page</option>
                        <option value="100">100 per Page</option>
                    </motion.select>
                    <div className={styles.prevNext}>
                        <button disabled={pageNum === 0 || products && products.length < 10} onClick={() => nextItems('prev')}>Prev</button>
                        <button disabled={products && products[products.length - 1].id === 100 || products && products.length < 10} onClick={() => nextItems('next')} >Next</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
