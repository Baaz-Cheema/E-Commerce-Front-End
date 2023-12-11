import styles from './AllProducts.module.css'

import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { productListActions } from '../../store/EcommerceStore'

import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from 'react-router-dom'
import ProductListWrapper from './ProductListWrapper'



export default function StoreMainSection() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [num, setNum] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const dataLoading = useSelector(state => state.productList.isLoading)
    const pageNum = useSelector(state => state.productList.pagnation)
    const data = useSelector(state => state.productList.productData)
    const filteredProducts = useSelector(state => state.productList.filteredProducts)
    const checkedBrands = useSelector(state => state.productList.selectedBrands)
    const productsPerPage = useSelector(state => state.productList.productsPerPage)

    let allBrands = data.products && filterBrands(data.products)
    function filterBrands(arr) { //only here to render all brands of the current product range 
        const filteredArray = []
        arr.forEach((item) => {
            if (!filteredArray.includes(item.brand)) {
                filteredArray.push(item.brand)
            }
        })
        return filteredArray
    }

    //logic to either show all products or the selected products
    let showProducts = checkedBrands.length === 0 ? data.products : filteredProducts


    useEffect(() => {
        async function getData() {
            setIsLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${pageNum}`)
            const responseData = await response.json()
            setIsLoading(false)
            dispatch(productListActions.setProducts(responseData))
        }
        getData()
    }, [dispatch, pageNum, productsPerPage])


    function nextItems(logic) {
        async function fetchData(newnum) {
            const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${pageNum}`);
            const data = await response.json()
            dispatch(productListActions.setProducts(data))
            dispatch(productListActions.setPagnation(newnum))
            window.scrollTo({ top: 0, behavior: 'auto' })
        }

        if (logic === 'next') {
            num <= 100 && setNum(prev => {
                const newNum = pageNum + productsPerPage; //need to dispatch an action here. oit using local state.....LATER
                fetchData(newNum);
                return newNum;
            });
        } else {
            num >= 0 && setNum(prev => {
                const newNum = pageNum - productsPerPage;
                fetchData(newNum);
                return newNum;
            });
        }
    }
    function setProductsPerPage(e) {
        console.log(e.target.value)
        dispatch(productListActions.setProductsPerPage(e.target.value))
    }

    async function displayDetails(id) {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await response.json()
        dispatch(productListActions.setProductDetails(data))
        return navigate('/itemDetail')
    } //Make a custom hook that fetches data....later

    return (
        <>
            {isLoading && <div className={styles.backdrop}>
                <Spinner animation='border' variant='primary' />
            </div>}
            <ProductListWrapper
                key={'allProductsPage'}
                title={'allProductsPage'}
                products={showProducts}
                isLoading={dataLoading}
                displayDetails={displayDetails}
                nextItems={nextItems}
                pageNum={pageNum}
                checkedBrands={checkedBrands}
                allBrands={allBrands}
                setProductsPerPage={setProductsPerPage} />
        </>
    )
}

// const hehe= new Set([...arr.products])
// console.log(hehe)