import { BsSmartwatch } from "react-icons/bs"
import { FaCamera, FaHeadphones, FaMobile } from "react-icons/fa"
import { FaComputer } from "react-icons/fa6"
import { SiYoutubegaming } from "react-icons/si"

const AttachedNavbar = () => {
    return (
        <div>
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
        </div>
    )
}

export default AttachedNavbar