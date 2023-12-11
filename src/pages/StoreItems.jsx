import { Outlet } from "react-router-dom"
import { useEffect } from "react"
export default function StoreItems() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'auto' })
    },[])
    return (
        <>
            <Outlet />
        </>
    )
}