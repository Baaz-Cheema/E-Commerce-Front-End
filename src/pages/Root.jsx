import { Outlet } from "react-router-dom"
import MainNavbar from "../Components/HomePage/Navbar/MainNavbar"
import Footer from "../Components/HomePage/Footer"
import { useEffect } from "react"
import { productListActions } from "../store/EcommerceStore"
import { useDispatch } from "react-redux"
export default function Root() {
    const dispatch = useDispatch()
   
    useEffect(() => {
        async function getAllProducts() {
            const response = await fetch('https://dummyjson.com/products?limit=0')
            const data = await response.json()
            dispatch(productListActions.setAllProducts(data.products))
        }
        getAllProducts()
    }, [dispatch])
    return <div className="overlay">
        <MainNavbar />
        <Outlet />
        <Footer />
    </div>

}