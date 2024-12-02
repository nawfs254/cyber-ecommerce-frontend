import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home"
import ProductsPage from "../Pages/ProductsPage"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Brands from "../Components/Filters/Brands";
import Ram from "../Components/Filters/Ram";
import Protection from "../Components/Filters/Protection";
import ScrrenDiag from "../Components/Filters/ScrrenDiag";
import ScreenTypes from "../Components/Filters/ScreenTypes";
import BatteryCaps from "../Components/Filters/BatteryCaps";
import axios from "axios";
import ProductDetail from "../Pages/ProductDetail";
import Cart from "../Pages/Cart";

const fetchedData = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/products/search?q=phone');
        return response.data.products; // Axios response data is in `data` property
    } catch (error) {
        console.error('Error fetching products:', error);
        return { products: [] }; // Return a fallback object or empty array in case of error
    }
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetchedData()
            },
            {
                path: "/products",
                element: <ProductsPage></ProductsPage>,
                loader: () => fetchedData()
            },
            {
                path: "/products/:id",
                element: <ProductDetail></ProductDetail>,
                loader: () => fetchedData()
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: "/cart",
                element: <Cart></Cart>
            }
        ]
    },
    {
        path: "/brands",
        element: <Brands></Brands>
    },
    {
        path: "/ram",
        element: <Ram></Ram>
    },
    {
        path: "/protection",
        element: <Protection></Protection>
    },
    {
        path: "/screen-diag",
        element: <ScrrenDiag></ScrrenDiag>
    },
    {
        path: "/screen-types",
        element: <ScreenTypes></ScreenTypes>
    },
    {
        path: "/battery",
        element: <BatteryCaps></BatteryCaps>
    }
])

export default router;