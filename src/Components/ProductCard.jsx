import { FaRegHeart } from "react-icons/fa6"
import product from "../assets/products (1).png"

const ProductCard = () => {
    return (
        <div className="bg-[#F6F6F6] px-4 py-6 text-center space-y-4 rounded-lg">
            <FaRegHeart></FaRegHeart>
            <div className="flex justify-center items-center">
                <img src={product} alt="" className="w-32 md:w-40 h-2w-32 md:h-40 " />
            </div>
            <p className="text-sm md:text-base font-medium">Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)</p>
            <h4 className="font-semibold text-2xl">$900</h4>
            <button className="px-5 md:px-16 py-2 md:py-3 bg-black text-white rounded-lg">Buy Now</button>
        </div>
    )
}

export default ProductCard