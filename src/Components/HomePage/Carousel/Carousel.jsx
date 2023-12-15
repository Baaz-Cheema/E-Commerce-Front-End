import { useState } from "react"
import CarouselItem from "./CarouselItem"
import styles from './Carousel.module.css'
import { useEffect } from "react"
import { Link } from "react-router-dom"
import styless from './CarouselItem.module.css'
const images = [
    {
        butn: true,
        img: 'https://pngimg.com/d/iphone_13_PNG19.png',
        heading: 'Experience the Future with the New iPhone',
        paragraph: 'Step into the future with our new iPhone, equipped with advanced zoom capabilities that bring the world closer to you. Capture life\'s moments in stunning detail, making every memory unforgettable.'
    },
    {
        butn: true,
        img: 'https://img.freepik.com/free-photo/thoughtful-summer-woman-hat-sunglasses-isolated-white-wall_231208-5903.jpg?w=996&t=st=1702676458~exp=1702677058~hmac=8fbb76caaa53378584c2a6ba4cf270e2981ce9f4724104cd5476ef99333de377',
        heading: 'Step into Style with Our Latest Fashion Collection',
        paragraph: 'Dive into the world of fashion with our latest collection, designed with the modern trendsetter in mind. Each piece is crafted with meticulous attention to detail, ensuring a perfect blend of style and comfort. Experience the joy of dressing up with our fashion-forward outfits that make every moment a runway.'
    },
    {
        img: 'https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp',
    }]


export default function Carousel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    function goLeft() {
        currentImageIndex === 0 ? setCurrentImageIndex(images.length - 1) : setCurrentImageIndex(prev => prev - 1)
    }
    function goRight() {
        currentImageIndex === images.length - 1 ? setCurrentImageIndex(0) : setCurrentImageIndex(prev => prev + 1)
    }

    // useEffect(() => {
    //     const slider = setTimeout(() => {
    //         if (currentImageIndex === images.length - 1) {
    //             setCurrentImageIndex(0)
    //             return
    //         }
    //         setCurrentImageIndex(prev => prev + 1)
    //     }, 15000)

    //     return () => clearTimeout(slider)
    // }, [currentImageIndex])
    return (
        <>
            <div className={styles.carousel}>
                <button className={`${styles.arrow} ${styles['arrow-left']}`} onClick={goLeft}><i className='bx bx-chevron-left' ></i></button>
                <div className={styles.carouselItemContainer} style={{ 'transform': `translateX(-${currentImageIndex * 100}%)` }}>
                    <CarouselItem
                        key={0}
                        img='https://pngimg.com/d/iphone_13_PNG19.png'
                        para="Step into the future with our new iPhone, equipped with advanced zoom capabilities that bring the world closer to you. Capture life\'s moments in stunning detail, making every memory unforgettable."
                        title='Experience the Future with the New iPhone'
                        butn={true} />
                    <div className={styless.carouselItem}>
                        <div className={styless.textContainer}>
                            <span>Men`s collection</span>
                            <span className={styless.new}>40<span>%</span> off</span>
                            <p>Step into Style with Our Latest Fashion Collection</p>
                            <Link to={'/store'}><button> Shop Now</button></Link>
                        </div>
                        <div className={styless.imageContainer}>
                            <img src='https://img.freepik.com/free-photo/cool-guy-having-fun-vacation-wearing-straw-hat-sunglasses-looking-aside-sassy-standing-blu_1258-164149.jpg?w=1380&t=st=1702677332~exp=1702677932~hmac=ff248df03664b4d9dab0d3b372c774f6f67b105a6b417c96132d73be703b5109' alt="" />
                        </div>
                    </div>

                    <CarouselItem
                        key={2}
                        img='https://slidebazaar.com/wp-content/uploads/2021/09/product-banner-jpg.webp'
                    />
                </div>
                <button className={`${styles.arrow} ${styles['arrow-right']}`} onClick={goRight}><i className='bx bx-chevron-right' ></i></button>
            </div>
        </>
    )
}