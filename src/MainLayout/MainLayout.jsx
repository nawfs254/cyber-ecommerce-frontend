import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet> {/*childrens in react router will be shown here */}
            <Footer></Footer>
        </>
    )
}

export default MainLayout