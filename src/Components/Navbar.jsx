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
import useAuth from "../Hooks/useContext"

const Navbar = () => {
    const { user, signout } = useAuth()
    console.log(user)


    const logout = () => {
        signout()
    }
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

                {
                    user ?
                        <div className="hidden md:flex items-center md:gap-4">
                            <FaRegHeart size="1.2rem"></FaRegHeart>
                            <GrCart size="1.2rem"></GrCart>
                            <div className="tooltip tooltip-right" data-tip={user.displayName}>
                                <details className="dropdown dropdown-end">
                                    <summary className="btn bg-transparent border-none shadow-none p-0 m-0 hover:bg-transparent"><FiUser size="1.2rem"></FiUser></summary>
                                    <ul className="menu dropdown-content bg-base-100 z-[1] w-52 p-2 shadow space-y-3 rounded-sm">
                                        <button className="font-medium bg-black text-white px-4 py-1 border-2 border-black hover:bg-transparent hover:text-black transition rounded-sm">
                                            <Link to="/signin">View Profile</Link>
                                        </button>
                                        <button onClick={() => logout()} className="font-medium bg-black text-white px-4 py-1 border-2 border-black hover:bg-transparent hover:text-black transition rounded-sm">
                                            <Link to="/signin">Signout</Link>
                                        </button>
                                    </ul>
                                </details>
                            </div>

                        </div> :
                        <div className="hidden md:flex space-x-3">
                            <button className="font-medium bg-black text-white px-4 py-1 border-2 border-black hover:bg-transparent hover:text-black transition rounded-sm">
                                <Link to="/signup">Signup</Link>
                            </button>
                            <button className="font-medium bg-black text-white px-4 py-1 border-2 border-black hover:bg-transparent hover:text-black transition rounded-sm">
                                <Link to="/signin">Signin</Link>
                            </button>
                        </div>
                }

                <details className="inline-block lg:hidden dropdown dropdown-end">
                    <summary className="btn m-1 bg-transparent border-none shadow-none">
                        <GiHamburgerMenu size="1.7rem"></GiHamburgerMenu>
                    </summary>

                    {
                        user ?

                            <ul className="menu dropdown-content bg-base-100 rounded-sm z-[1] w-[94vw] md:w-[96vw] p-2 shadow">
                                <div className="px-4 pb-3">Welcome to Cyber, <span className="font-medium"> {user.displayName}</span>!</div>
                                <hr />
                                <li><NavLink to="/" className="text-end">Home</NavLink></li>
                                <li><NavLink to="/products">Products</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li>
                                    <button onClick={() => logout()} className="font-medium bg-black text-white px-4 py-1 border-2 border-black hover:bg-transparent hover:text-black transition rounded-sm">
                                        <Link to="/signin">Signout</Link>
                                    </button>
                                </li>
                            </ul> :
                            <ul className="menu dropdown-content bg-base-100 rounded-sm z-[1] w-[94vw] md:w-[96vw] p-2 shadow">
                                <li><NavLink to="/" className="text-end">Home</NavLink></li>
                                <li><NavLink to="/products">Products</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                <li className="space-y-2">
                                    <button className="font-medium bg-black text-white px-4 py-1 border-2 border-black hover:bg-transparent hover:text-black transition rounded-sm">
                                        <Link to="/signup">Signup</Link>
                                    </button>
                                    <button className="font-medium bg-black text-white px-4 py-1 border-2 border-black hover:bg-transparent hover:text-black transition rounded-sm">
                                        <Link to="/signin">Signin</Link>
                                    </button>
                                </li>
                            </ul>
                    }
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