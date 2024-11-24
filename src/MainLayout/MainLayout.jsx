import { Outlet } from "react-router"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"

const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar></Navbar>
            <Outlet></Outlet> {/*childrens in react router will be shown here */}
            <Footer></Footer>
        </div>
    )
}

export default MainLayout