import BestDeals from "./BestDeals"
import Services from "./Services"
import FeaturedCategories from "./FeaturedCategories"
import HotCollection from "./Hot Collection/HotCollection"



export default function MainSection() {
    return <div className="mainSection">
        <BestDeals />
        <FeaturedCategories />
        <HotCollection />
        <Services />
    </div>
}