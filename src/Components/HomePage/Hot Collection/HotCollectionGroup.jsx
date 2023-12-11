import HotCollectionItem from "./HotcollectionItem"

import { forwardRef } from "react"
import { useDispatch } from "react-redux";
import { productListActions } from "../../../store/EcommerceStore";
import { useNavigate } from "react-router-dom";


export default forwardRef(function HotCollectionGroup(props, ref) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { productData } = props;
    async function displayDetails(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        dispatch(productListActions.setProductDetails(data))
        return navigate('/itemDetail')
    }
    
    return (
        <>
            {productData && productData.map((item, i) =>
                <HotCollectionItem key={i} ref={ref}
                    displayDetails={() => displayDetails(item.id)}
                    product={item}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    stock={item.stock}
                    discount={item.discountPercentage}
                    thumbnail={item.thumbnail}
                />)}
        </>
    )
})