import { NavLink } from "react-router"
import ProductCard from "./ProductCard"

const Products = (products) => {
    const homeProducts = products.products
    return (
        <div className="mb-16">
            <div className="px-4 lg:px-36 mb-8 text-lg font-medium flex gap-8">
                <NavLink className="opacity-60 hover:opacity-100 transition hover:underline underline-offset-4">New Arrival</NavLink>
                <NavLink className="opacity-60 hover:opacity-100 transition hover:underline underline-offset-4">Best Seller</NavLink>
                <NavLink className="opacity-60 hover:opacity-100 transition hover:underline underline-offset-4">Featured Products</NavLink>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 lg:px-36 gap-4">
                {
                    (homeProducts.slice(0,8)).map(product => {
                        return <ProductCard key={product.id} allProducts={product}></ProductCard>
                    })
                }
            </div>
        </div>
    )
}

export default Products