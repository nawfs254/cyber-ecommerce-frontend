import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home"
import Products from "../Pages/Products"
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>
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
            }
        ]
    }
])

export default router;