import CategoryItem from "./CategoryItem"
import { forwardRef } from "react"
import styles from './CategoryGroup.module.css'


export default forwardRef(function CategoryGroup(props,ref) {
    return (
        <div ref={ref} className={styles.categoryGroup}>
            {props.data.map((item, i) => <CategoryItem func={props.func} key={i} title={item.title} quantity={item.quantity} image={item.img} />)}
        </div>
    )
}
)