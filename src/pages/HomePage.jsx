import Carousel from "../Components/HomePage/Carousel/Carousel";
import MainSection from "../Components/HomePage/MainSection";
import FlashSale from "../Components/HomePage/Flash sale/FlashSale";

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