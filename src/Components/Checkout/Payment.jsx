import Shipping from "./Shipping";
import { useEffect } from "react";

export default function Payment() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'auto' })
    },[])
    return <Shipping displayPayment={true} />
}