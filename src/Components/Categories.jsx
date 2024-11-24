import { BsSmartwatch } from "react-icons/bs"
import { FaCamera, FaComputer, FaHeadphones, FaMobile } from "react-icons/fa6"
import { SiYoutubegaming } from "react-icons/si"

const Categories = () => {
    return (
        <div className="py-20 px-4 lg:px-36">
            <h3 className="text-2xl font-medium mb-8">Browse By Category</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 justify-between gap-8">
                <div className="px-12 py-6 bg-[#EDEDED] flex flex-col items-center justify-center gap-2 rounded-2xl text-center">
                    <FaMobile size="1.5rem"></FaMobile>
                    <p>Phones</p>
                </div>
                <div  className="px-12 py-6 bg-[#EDEDED] flex flex-col items-center justify-center gap-2 rounded-2xl text-center">
                    <FaComputer size="1.5rem"></FaComputer>
                    <p>Computers</p>
                </div>
                <div  className="px-12 py-6 bg-[#EDEDED] flex flex-col items-center justify-center gap-2 rounded-2xl text-center">
                    <BsSmartwatch size="1.5rem"></BsSmartwatch>
                    <p>Smart Watches</p>
                </div>
                <div  className="px-12 py-6 bg-[#EDEDED] flex flex-col items-center justify-center gap-2 rounded-2xl text-centerl">
                    <FaCamera size="1.5rem"></FaCamera>
                    <p>Cameras</p>
                </div>
                <div  className="px-12 py-6 bg-[#EDEDED] flex flex-col items-center justify-center gap-2 rounded-2xl text-center">
                    <FaHeadphones size="1.5rem"></FaHeadphones>
                    <p>Headphones</p>
                </div>
                <div  className="px-12 py-6 bg-[#EDEDED] flex flex-col items-center justify-center gap-2 rounded-2xl text-center">
                    <SiYoutubegaming size="1.5rem"></SiYoutubegaming>
                    <p>Gaming</p>
                </div>
            </div>
        </div>
    )
}

export default Categories