import styles from './SideBar.module.css';

import { useDispatch } from 'react-redux'
import { productListActions } from '../../store/EcommerceStore'
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function SideBar({ brands }) {
    const dispatch = useDispatch()
    const checkedBrands = useSelector(state => state.productList.selectedBrands)
    const handleBrandChange = (action) => {
        dispatch(productListActions.setLoading())
        setTimeout(() => {
            dispatch(action)
            dispatch(productListActions.setLoading())
        }, 1000)
    }
    const setBrand = (e) => {
        if (e.target.checked) {
            handleBrandChange(productListActions.setBrands(e.target.value))
        } else {
            handleBrandChange(productListActions.removeBrand(e.target.value))
        }
    }


    return (
        <div className={styles.sideBar}>
            <h5>Brand</h5>
            {brands && brands.map((brand, index) => (
                <div className={styles.itemGroup} key={index}>
                    <div className={`checkbox-wrapper-47`}>
                        <input checked={checkedBrands && checkedBrands.includes(brand)} onChange={setBrand} className={'substituted'} type='checkbox' id={`brand-${index}`} name={brand} value={brand} />
                        <label className={styles.brandName} htmlFor={`brand-${index}`}>{brand}</label>
                    </div>
                </div>
            ))}
            <hr style={{ width: '80%', alignSelf: 'center', margin: '2.5rem 0' }} />
        </div>
    );
}
