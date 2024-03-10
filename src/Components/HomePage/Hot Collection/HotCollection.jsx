import styles from './HotCollection.module.css'
import HotCollectionGroup from './HotCollectionGroup'
import HeadingButtons from '../UtilComponents/HeadingButtons';
import { useRef } from 'react';
import { useState, useEffect } from 'react';

export default function HotCollection({ url, title }) {
    const scrollRef = useRef()
    const itemRef = useRef()
    const [data, setData] = useState([])
    async function getData() {
        try {
            const response = await fetch(url)
            const responseData = await response.json()
            setData(responseData.products)
            if (!response.ok) {
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
        scrollRef.current.scrollLeft -= itemRef.current.offsetWidth
    }

    function goRight() {
        scrollRef.current.scrollLeft += itemRef.current.offsetWidth
    }

    return (
        <>
            <HeadingButtons linkTo={'All Offers'} navLeft={goLeft} navRight={goRight} title={title} />
            <div className={styles.parent} style={{ marginBottom: title === 'Featured Products' && 0 }}>
                <div ref={scrollRef} className={styles.carousel + ' snaps'}>
                    <HotCollectionGroup ref={itemRef} productData={data} />
                </div>
            </div>
        </>
    )
}
