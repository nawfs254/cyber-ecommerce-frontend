import { useLoaderData } from "react-router"
import Banner from "../Components/Banner"
import Categories from "../Components/Categories"
import DiscountedProducts from "../Components/DiscountedProducts"
import Featured from "../Components/Featured"
import OfferExplore from "../Components/OfferExplore"
import Products from "../Components/Products"

const Home = () => {
    const products = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Featured></Featured>
            <Categories></Categories>
            <Products products={products}></Products>
            <DiscountedProducts products={products}></DiscountedProducts>
            <OfferExplore></OfferExplore>
        </div>
    )
}

export default Home