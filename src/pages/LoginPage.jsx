import LoginForm from "../Components/Login/LoginForm"
import { useEffect } from "react"
export default function LoginPage() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'auto' })
    },[])
    return (
        <>
            <LoginForm />
        </>
    )
}