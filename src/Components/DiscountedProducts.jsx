import ProductCard from "./ProductCard"
import SectionHead from "./SectionHead"

const DiscountedProducts = (procucts) => {
    const homeProducts = procucts.products
    return (
        <div className="mb-16 px-4 lg:px-36">
            <SectionHead title={'Discounted Products'}></SectionHead>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    (homeProducts.slice(10,14)).map(product => {
                        return <ProductCard key={product.id} allProducts={product}></ProductCard>
                    })
                }
            </div>
        </div>
    )
}

export default DiscountedProducts