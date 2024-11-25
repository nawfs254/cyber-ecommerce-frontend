import Banner from "../Components/Banner"
import Categories from "../Components/Categories"
import DiscountedProducts from "../Components/DiscountedProducts"
import Featured from "../Components/Featured"
import OfferExplore from "../Components/OfferExplore"
import Products from "../Components/Products"

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Featured></Featured>
            <Categories></Categories>
            <Products></Products>
            <DiscountedProducts></DiscountedProducts>
            <OfferExplore></OfferExplore>
        </>
    )
}

export default Home