import Carousel from "../Components/HomePage/Carousel/Carousel";
import MainSection from "../components/HomePage/MainSection";
import FlashSale from "../components/HomePage/Flash sale/FlashSale";

import { useEffect } from "react";
export default function HomePage() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'auto' })
    },[])
    return (<>
        <Carousel />
        <FlashSale />
        <MainSection />
    </>
    )

}