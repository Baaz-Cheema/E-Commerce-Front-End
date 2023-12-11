import styles from './HotCollection.module.css'
import HotCollectionGroup from './HotCollectionGroup'
import HeadingButtons from '../UtilComponents/HeadingButtons';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

export default function HotCollection() {
    const scrollRef = useRef()
    const itemRef = useRef()
    const [data, setData] = useState([])
    async function getData() {
        try {
            const response = await fetch('https://dummyjson.com/products?limit=16&skip=78')
            const responseData= await response.json()
            setData(responseData.products)
            if(!response.ok){
                console.log(response)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }
        , [])
    function goLeft() {
        scrollRef.current.scrollLeft -= itemRef.current.offsetWidth + 12
        // console.log(itemRef.current.offsetWidth, scrollRef.current.scrollLeft)
    }

    function goRight() {
        // console.log(itemRef.current.offsetWidth)
        scrollRef.current.scrollLeft += itemRef.current.offsetWidth + 12
        // console.log(itemRef.current.offsetWidth, scrollRef.current.scrollLeft, scrollRef.current.scrollLeft > 800)
    }

    return (
        <>
            <HeadingButtons linkTo={'All Offers'} navLeft={goLeft} navRight={goRight} title={'Popular Products'} />
            <div className={styles.parent} ref={scrollRef}>
                <div className={styles.carousel}>
                    <HotCollectionGroup ref={itemRef} productData={data} />
                </div>
            </div>
        </>
    )
}
