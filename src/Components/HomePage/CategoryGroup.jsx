import CategoryItem from "./CategoryItem"
import styles from './CategoryGroup.module.css'


export default function CategoryGroup({ data, func}) {
    return (
        <div className={styles.categoryGroup}>
            {data.map((item, i) => <CategoryItem func={func}  key={i} title={item.title} quantity={item.quantity} image={item.img} />)}
        </div>
    )
}
