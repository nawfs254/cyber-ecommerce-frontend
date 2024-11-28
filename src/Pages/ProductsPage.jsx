import { IoMdArrowDropright } from "react-icons/io"
import ProductCard from "../Components/ProductCard"
import { IoFilter } from "react-icons/io5"
import { useLoaderData } from "react-router"
import { useState } from "react"
import Pagination from "../Components/pagination"

const ProductsPage = () => {
    const products = useLoaderData()
    
    const [currentPage, setCurrentPage] = useState(1)
    const productPerPage = 9

    const lastIndex = currentPage * productPerPage
    const firstIndex = lastIndex - productPerPage

    const currentProducts = products.slice(firstIndex, lastIndex) 

    console.log(products.length)
 
    return (
        <div className="md:flex gap-3 mx-4 lg:mx-36 my-4">
            <div className="hidden lg:block w-full md:w-1/3  border-r-2 border-r-gray-300">
                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium flex gap2 items-center"> <IoMdArrowDropright size="1.5rem"></IoMdArrowDropright> Price</div>
                    <div className="collapse-content">
                        <div className="menu dropdown-content w-full">
                            <div className="flex gap-2">
                                <div className="w-1/2">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <span className="label-text font-medium">From</span>
                                        </div>
                                        <input type="text" placeholder="$ From" className="bg-gray-100  input w-full" />
                                    </label>
                                </div>
                                <div className="w-1/2">
                                    <label className="form-control w-full max-w-xs">
                                        <div className="label">
                                            <div className="label-text font-medium w-full text-right">To</div>
                                        </div>
                                        <input type="text" placeholder="$ To" className="bg-gray-100 input w-full" />
                                    </label>
                                </div>
                            </div>

                            <div className="m-2">
                                <input id="default-range" type="range" value="30" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"></input>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Brand Names */}

                <div className="collapse" open>
                    <input type="checkbox" />
                    <div className="collapse-title font-medium flex gap2 items-center"> <IoMdArrowDropright size="1.5rem"></IoMdArrowDropright> Brands</div>
                    <div className="collapse-content">
                        <div className="menu dropdown-content">
                            <iframe src={"../brands"} className="scrollbar-thin ">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Variants */}

                <div className="collapse" open>
                    <input type="checkbox" />
                    <div className="collapse-title font-medium flex gap2 items-center"> <IoMdArrowDropright size="1.5rem"></IoMdArrowDropright> Varint</div>
                    <div className="collapse-content">
                        <div className="menu dropdown-content w-full">
                            <iframe src={"../ram"} className="scrollbar-thin ">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Protection class */}

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium flex gap2 items-center"> <IoMdArrowDropright size="1.5rem"></IoMdArrowDropright> Protection class</div>
                    <div className="collapse-content">
                        <div className="menu dropdown-content w-full">
                            <iframe src={"../protection"} className="scrollbar-thin ">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Screen diagonal */}

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium flex gap2 items-center"> <IoMdArrowDropright size="1.5rem"></IoMdArrowDropright> Screen diagonal</div>
                    <div className="collapse-content">
                        <div className="menu dropdown-content w-full">
                            <iframe src={"../screen-diag"} className="scrollbar-thin ">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Screen type */}

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium flex gap2 items-center"> <IoMdArrowDropright size="1.5rem"></IoMdArrowDropright> Screen type</div>
                    <div className="collapse-content">
                        <div className="menu dropdown-content w-full">
                            <iframe src={"../screen-types"} className="scrollbar-thin ">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* Battery capacity */}

                <div className="collapse">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium flex gap2 items-center"> <IoMdArrowDropright size="1.5rem"></IoMdArrowDropright> Battery capacity</div>
                    <div className="collapse-content">
                        <div className="menu dropdown-content w-full">
                            <iframe src={"../battery"} className="scrollbar-thin ">
                            </iframe>
                        </div>
                    </div>
                </div>

                {/* <div>
                    <details className="dropdown w-full flex flex-col" open>
                        <summary className="m-2 text-left cursor-pointer font-medium">Brands</summary>
                        <hr className="mx-2" />
                        <div className="menu dropdown-content w-full">
                            <iframe src={"../ram"} className="scrollbar-thin ">
                            </iframe>
                        </div>
                    </details>
                </div> */}


            </div>
            <div className="lg:m-2 w-full lg:w-2/3">
                <div className="mb-5 flex justify-between">
                    <h3 className="font-medium text-xl">Products</h3>
                    <select className="hidden lg:inline-flex select select-bordered select-sm w-full max-w-xs">
                        <option disabled selected>Sort by</option>
                        <option>Ratings</option>
                        <option>Price (Low to High)</option>
                        <option>Price (High to low)</option>
                    </select>
                </div>


                <div className="flex items-center">
                    <button className="lg:hidden btn my-2" onClick={() => document.getElementById('my_modal_1').showModal()}><IoFilter></IoFilter> Filter</button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <select className="inline-flex lg:hidden select select-bordered select-md mx-3 border-none bg-gray-100 w-30 font-medium">
                        <option disabled selected>Sort by</option>
                        <option>Ratings</option>
                        <option>Price (Low to High)</option>
                        <option>Price (High to low)</option>
                    </select>
                </div>



                <div className="grid grid-cols-2 lg:grid-cols-3  gap-2">
                    {
                        currentProducts.map((product) => {
                            return <ProductCard key={product.id} allProducts={product}></ProductCard>
                        })
                    }

                    <div className="col-span-2 md:col-span-3">
                        <Pagination totalProducts={products.length} productPerPage={productPerPage} setCurrentPage={setCurrentPage}></Pagination>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage