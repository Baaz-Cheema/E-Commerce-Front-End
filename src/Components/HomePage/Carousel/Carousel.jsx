import { useState } from "react"
import CarouselItem from "./CarouselItem"
import styles from './Carousel.module.css'
import { useEffect } from "react"
const images = [
    {
        butn: true,
        img: 'https://pngimg.com/d/iphone_13_PNG19.png',
        heading: 'Experience the Future with the New iPhone',
        paragraph: 'Step into the future with our new iPhone, equipped with advanced zoom capabilities that bring the world closer to you. Capture life\'s moments in stunning detail, making every memory unforgettable.'
    },
    {
        img: 'https://graphicsfamily.com/wp-content/uploads/edd/2022/12/E-commerce-Product-Banner-Design-scaled.jpg',
    },
    {
        img: 'https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp',
        heading: '',
    }]


export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    function goLeft() {
        currentImageIndex === 0 ? setCurrentImageIndex(images.length - 1) : setCurrentImageIndex(prev => prev - 1)
    }
    function goRight() {
        currentImageIndex === images.length - 1 ? setCurrentImageIndex(0) : setCurrentImageIndex(prev => prev + 1)
    }

    useEffect(() => {
        const slider = setTimeout(() => {
            if (currentImageIndex === images.length - 1) {
                setCurrentImageIndex(0)
                return
            }
            setCurrentImageIndex(prev => prev + 1)
        }, 15000)

        return () => clearTimeout(slider)
    }, [currentImageIndex])
    return (
        <>
            <div className={styles.carousel}>
                <button className={`${styles.arrow} ${styles['arrow-left']}`} onClick={goLeft}><i className='bx bx-chevron-left' ></i></button>
                <div className={styles.carouselItemContainer} style={{ 'transform': `translateX(-${currentImageIndex * 100}%)` }}>
                    {images.map((item, i) => {
                        return <CarouselItem key={i} img={item.img} para={item.paragraph} title={item.heading} haha={item.haha} butn={item.butn} />
                    })}
                </div>
                <button className={`${styles.arrow} ${styles['arrow-right']}`} onClick={goRight}><i className='bx bx-chevron-right' ></i></button>
            </div>

        </>
    )
}