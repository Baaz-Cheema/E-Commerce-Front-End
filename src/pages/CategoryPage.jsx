import { useSelector } from "react-redux/es/hooks/useSelector"

import ProductListWrapper from "../Components/StoreItems/ProductListWrapper"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { productListActions } from "../store/EcommerceStore"


export default function CategoryPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(state => state.productList.selectedCategoryProducts)
    const category = useSelector(state => state.productList.selectedCategory)
    let allBrands = data.products && filterBrands(data.products)
    const checkedBrands = useSelector(state => state.productList.selectedBrands) //is an array of brands
    const isLoading = useSelector(state => state.productList.isLoading)

    function filterProducts(arr) {
        let str = checkedBrands.join('')
        return arr.filter(a => str.includes(a.brand))
    }

    let showProducts = checkedBrands.length === 0 ? data.products : filterProducts(data.products)

    function filterBrands(arr) { // to render all brands of the current product range (all produtcts or selected category) in the sidebar.
        const filteredArray = []
        arr.forEach((item) => {
            if (!filteredArray.includes(item.brand)) {
                filteredArray.push(item.brand)
            }
        })
        return filteredArray
    }
    async function displayDetails(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        dispatch(productListActions.setProductDetails(data))
        return navigate('/itemDetail')
    }
    return <>
        <ProductListWrapper
            key={'categoryPage'}
            products={showProducts}
            displayDetails={displayDetails}
            category={category}
            isLoading={isLoading}
            allBrands={allBrands}
        />
    </>
}