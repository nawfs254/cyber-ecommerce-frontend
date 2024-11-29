import { FaRegHeart } from "react-icons/fa6"
import { Link } from "react-router";

const ProductCard = ({ allProducts = {} }) => {
    const { images = [], title = '', price = '' } = allProducts;

    return (
        <div className="bg-[#F6F6F6] px-4 py-6 text-center space-y-4 rounded-lg flex flex-col">
            <FaRegHeart />
            <div className="flex items-center justify-center">
                <div
                    className="flex justify-center items-center h-40 w-40 bg-contain bg-center bg-no-repeat rounded-lg"
                    style={{ backgroundImage: `url(${images[0] || ''})` }}
                >
                </div>
            </div>
            <p className="text-sm md:text-base font-medium grow">{title}</p>
            <h4 className="font-semibold text-2xl">${price}</h4>
            <button className="px-5 md:px-16 py-2 md:py-3 bg-black text-white rounded-lg">
                <Link to={`id`}>Buy Now</Link>
            </button>
        </div>
    );
};

export default ProductCard;

