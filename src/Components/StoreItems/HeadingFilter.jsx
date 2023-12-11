import styles from './HeadingFilter.module.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useNavigate } from 'react-router-dom'
import Filters from './Filters';
export default function HeadingFilter({ brands, title }) {
    const category = useSelector(state => state.productList.selectedCategory);

    const navigate = useNavigate();
    function redirect() {
        navigate('/store');
    }
    return (
        <>
            <div className={styles.container}>
                <span className={styles.heading}>{title === 'allProductsPage' ? 'All products' : category}</span>
                <div className={styles.filterBox}>
                    <Filters brands={brands} />
                </div>
            </div>
            {title !== 'allProductsPage' && <div onClick={redirect} ><span className={styles.link}><i className='bx bx-arrow-back' ></i> All Products</span>
            </div>}
        </>
    )
}