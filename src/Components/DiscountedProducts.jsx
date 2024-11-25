import ProductCard from "./ProductCard"
import SectionHead from "./SectionHead"

const DiscountedProducts = () => {
    return (
        <div className="mb-16 px-4 lg:px-36">
            <SectionHead title={'Discounted Products'}></SectionHead>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    )
}

export default DiscountedProducts