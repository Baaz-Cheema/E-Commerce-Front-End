import AccountNavbar from "../Components/Account/AccountNavbar"
import { Outlet} from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useState } from "react"
import { Spinner } from "react-bootstrap"
export default function Account() {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/login')
        }
        setIsLoading(false)
    }, [navigate, isLoggedIn])

    if (isLoading) {
        return <div className='spinningBackdrop'>
            <Spinner variant="primary" animation="border" />
        </div>
    }

    return (
        <>
            <AccountNavbar />
            <div className="account-tabs">
                <Outlet />
            </div>
        </>
    )
}