import BestDeals from "./BestDeals"
import Services from "./Services"
import FeaturedCategories from "./FeaturedCategories"
import HotCollection from "./Hot Collection/HotCollection"



export default function MainSection() {
    return <div className="mainSection">
        <BestDeals />
        <FeaturedCategories />
        <HotCollection url={'https://dummyjson.com/products?limit=8&skip=78'} title={'Featured Products'} />
        <HotCollection  url={'https://dummyjson.com/products?limit=8&skip=86'} title={'Popular Products'} />
        <Services />
    </div>
}