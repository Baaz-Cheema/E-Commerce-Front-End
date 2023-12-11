import styles from './FeaturedCategories.module.css'
import CategoryGroup from './CategoryGroup'
import { useState } from 'react'
import HeadingButtons from './UtilComponents/HeadingButtons'
import { useDispatch } from 'react-redux'
import { productListActions } from '../../store/EcommerceStore'
import { useNavigate } from 'react-router-dom'

const arr1 = [
    { "title": "Womens Shoes", "quantity": 54, "img": "https://clipart-library.com/image_gallery2/Women-Shoes-PNG-Clipart.png" },
    { "title": "Mens Watches", "quantity": 89, "img": "https://pngimg.com/d/watches_PNG9853.png" },
    { "title": "Skincare", "quantity": 78, "img": "https://www.harmonyskinlab.com/wp-content/uploads/2022/02/bottle2.png" },
    { "title": "Womens Bags", "quantity": 45, "img": "https://www.freepnglogos.com/uploads/women-bag-png/women-bag-png-transparent-images-download-clip-6.png" },
    { "title": "Automotive", "quantity": 67, "img": "https://pngimg.com/d/volkswagen_PNG1820.png" },
    { "title": "Womens Jewellery", "quantity": 23, "img": "https://i.pinimg.com/originals/47/42/c7/4742c712595010ebb6cb6bb0aeff5aaf.png" }
]

const arr2 = [
    { "title": "Fragrances", "quantity": 36, "img": "https://freepngimg.com/thumb/perfume/3-2-perfume-free-download-png.png" },
    { "title": "Mens Shirts", "quantity": 12, "img": "https://purepng.com/public/uploads/large/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png" },
    { "title": "Womens Watches", "quantity": 98, "img": "https://freepngimg.com/thumb/watch/22382-5-ladies-watch-file.png" },
    { "title": "Sunglasses", "quantity": 56, "img": "https://pngimg.com/d/sunglasses_PNG132.png" },
    { "title": "Groceries", "quantity": 34, "img": "https://freepngimg.com/thumb/grocery/54018-9-grocery-free-hq-image.png" },
    { "title": "Laptops", "quantity": 76, "img": "https://www.freepnglogos.com/uploads/laptop-png/laptop-computer-business-vector-graphic-pixabay-14.png" }
]




export default function FeaturedCategories() {
    const [currentGroupIndex, setcurrentGroupIndex] = useState(0)
    function goLeft() {
        currentGroupIndex === .5 ? setcurrentGroupIndex(0) : null
    }
    function goRight() {
        currentGroupIndex === 0 ? setcurrentGroupIndex(.5) : null
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()


    async function selectCategory(str) {
        str = str.replace(' ', '-')
        let url = `https://dummyjson.com/products/category/${str}?limit=15&skip=0`
        dispatch(productListActions.setLoading())
        const response = await fetch(url)
        const data = await response.json()
        dispatch(productListActions.setLoading())
        dispatch(productListActions.setBrands('emptyList'))
        dispatch(productListActions.setCategoryProducts(data))
        dispatch(productListActions.setCategory(str))
        navigate('/store/category')
    }

    return (
        <>
            <HeadingButtons linkTo={'More'} title={'Featured Categories'} navLeft={goLeft} navRight={goRight} />
            <div className={styles.parent}>
                <div className={styles.carousel} style={{ 'transform': `translateX(-${currentGroupIndex * 100}%)` }} >
                    <CategoryGroup func={selectCategory} data={arr1} />
                    <CategoryGroup func={selectCategory} data={arr2} />
                </div>
            </div>
        </>
    )
}