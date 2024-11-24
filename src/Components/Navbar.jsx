import { GiHamburgerMenu } from "react-icons/gi"
import logo from "../assets/logo.svg"
import { Link, NavLink } from "react-router"
import { HiMiniMagnifyingGlass } from "react-icons/hi2"
import { FaCamera, FaHeadphones, FaMobile, FaRegHeart } from "react-icons/fa"
import { FiUser } from "react-icons/fi"
import { GrCart } from "react-icons/gr"
import { FaComputer } from "react-icons/fa6"
import { SiYoutubegaming } from "react-icons/si"
import { BsSmartwatch } from "react-icons/bs"

const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center px-4 lg:px-36 py-6 md:py-4">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>

                <label className="input input-bordered hidden md:flex items-center gap-2 h-10 lg:w-80 bg-[#F5F5F5] border-none">
                    <HiMiniMagnifyingGlass></HiMiniMagnifyingGlass>
                    <input type="text" className="grow" placeholder="Search" />
                </label>

                <ul className="nav-menu hidden lg:flex gap-10">
                    <li><NavLink to="/" className="opacity-50 hover:opacity-100 transition font-medium">Home</NavLink></li>
                    <li><NavLink to="/products" className="opacity-50 hover:opacity-100 transition font-medium">Products</NavLink></li>
                    <li><NavLink to="/about" className="opacity-50 hover:opacity-100 transition font-medium">About</NavLink></li>
                    <li><NavLink to="/contact" className="opacity-50 hover:opacity-100 transition font-medium">Contact</NavLink></li>
                </ul>

                <div className="hidden md:flex md:gap-4">
                    <FaRegHeart size="1.2rem"></FaRegHeart>
                    <GrCart size="1.2rem"></GrCart>
                    <FiUser size="1.2rem"></FiUser>
                </div>

                <details className="inline-block lg:hidden dropdown dropdown-end">
                    <summary className="btn m-1 bg-transparent border-none shadow-none">
                        <GiHamburgerMenu size="1.7rem"></GiHamburgerMenu>
                    </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[94vw] md:w-[96vw] p-2 shadow">
                        <li><NavLink to="/" className="text-end">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </details>
            </div>

            <div className="hidden md:flex md:text-sm lg:text-base items-center px-4 lg:px-36 py-2 text-white bg-[#2E2E2E] justify-between">
                <div className="flex items-center opacity-80 gap-2">
                    <FaMobile></FaMobile>
                    <p>Phones</p>
                </div>
                <div className="flex items-center opacity-80 gap-2">
                    <FaComputer></FaComputer>
                    <p>Computers</p>
                </div>
                <div className="flex items-center opacity-80 gap-2">
                    <BsSmartwatch></BsSmartwatch>
                    <p>Smart Watches</p>
                </div>
                <div className="flex items-center opacity-80 gap-2">
                    <FaCamera></FaCamera>
                    <p>Cameras</p>
                </div>
                <div className="flex items-center opacity-80 gap-2">
                    <FaHeadphones></FaHeadphones>
                    <p>Headphones</p>
                </div>
                <div className="flex items-center opacity-80 gap-2">
                    <SiYoutubegaming></SiYoutubegaming>
                    <p>Gaming</p>
                </div>  
            </div>
        </>
    )
}

export default Navbar