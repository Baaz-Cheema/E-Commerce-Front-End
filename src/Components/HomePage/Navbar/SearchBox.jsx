import styles from './MainNavbar.module.css'
import { productListActions } from '../../../store/EcommerceStore'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function SearchBox({ items,func }) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    async function displayDetails(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        dispatch(productListActions.setProductDetails(data))
        func()
        navigate('/itemDetail')
    }
    return (
        <div className={styles.searchBox}>
            {
                items && items.map(a => <div onClick={()=>displayDetails(a.id)} key={a.id} className={styles.searchItem}>
                    <div className={styles.imgContainer} >
                        <img src={a.images[0]? a.images[0]:a.thumbnail} alt="" />
                    </div>
                    <div className={styles.info}>
                        <span>{a.title}</span>
                    </div>
                </div>)
            }
        </div>
    )
}