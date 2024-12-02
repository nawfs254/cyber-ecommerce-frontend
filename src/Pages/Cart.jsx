import { useEffect, useState } from "react";
import CartCard from "../Components/CartCard";
import SectionHead from "../Components/SectionHead";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
    const { register, getValues } = useForm()
    const localCart = (key) => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : null;
    }

    const cartItems = localCart("product")



    const [subtotal, setSubtotal] = useState(0)
    const [taxAmount, setTaxAmount] = useState(0)
    const [shippingCharge, setShippingCharge] = useState(0)
    const [couponDiscount, setCouponDiscount] = useState(0)
    const [couponApplied, setCouponApplied] = useState(false)
    const [netTotal, setNetTotal] = useState(0)

    const handleClick = () => {
        const couponCode = getValues('couponCode')
        console.log(couponCode)
        if (couponCode === 'Arnob25' && couponApplied === false) {
            setCouponDiscount(subtotal * 0.25)
            setCouponApplied(true)
            toast.success("Coupon applied! You've got 25% discount.")
        }
        else if (couponCode === 'Arnob25' && couponApplied === true) {
            toast.error("Coupon already Applied!")
        }
        else if (couponCode === 'Nawfs50' && couponApplied === false) {
            setCouponDiscount(subtotal * 0.50)
            setCouponApplied(true)
            toast.success("Coupon applied! You've got 50% discount.")
        }
        else if (couponCode === 'Nawfs50' && couponApplied === true) {
            toast.error("Coupon already Applied!")
        }
        else {
            toast.error("Invalid Coupon Code!")
        }
    }

    


    useEffect(() => {
        const calculatedSubtotal = cartItems.reduce((total, item) => total + (item.price || 0), 0);
        setSubtotal(calculatedSubtotal);

        setTaxAmount(parseFloat(((subtotal * 15) / 100).toFixed(2)))
        setShippingCharge(15 * cartItems.length)


        setNetTotal(subtotal + taxAmount + shippingCharge - couponDiscount)

    }, [])

    const handlePriceUpdate = (price) => {
        //setSubtotal(subtotal + price);
        console.log(subtotal , price)
    };


    return (
        <div className="mx-4 lg:mx-36">
            <Toaster></Toaster>
            <div className="my-5">
                <SectionHead title={"Shipping Cart"}></SectionHead>
            </div>

            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-1/2 lg:border-r-2 md:m-3 lg:border-r-gray-400 lg:p-3">
                    {
                        cartItems ? cartItems.map((cartItem, index) => {
                            return <CartCard key={index} cartItem={cartItem} onPriceUpdate={handlePriceUpdate}></CartCard>
                        }) : <div className="md:m-10 text-xl opacity-40 font-black">No Items in the Cart</div>
                    }
                </div>
                <div className="w-full lg:w-1/2">
                    <SectionHead title={"Order Summery"}></SectionHead>

                    <label className="input input-bordered flex items-center gap-2 rounded-md">
                        <input type="text" className="grow " placeholder="Discount Code" {...register('couponCode')} />
                        <span className="">
                            <button type="button" onClick={handleClick} className="border-[1px] border-black hover:bg-black hover:text-white transition px-3 py-1 rounded-md font-medium">Apply</button>
                        </span>
                    </label>

                    <div>
                        <div className="flex justify-between items-center px-3 font-medium my-7">
                            <h3>Subtotal</h3>
                            <p>${subtotal}</p>
                        </div>
                        <div className="flex justify-between items-center px-3">
                            <h3>Estimated Tax</h3>
                            <p>${taxAmount}</p>
                        </div>
                        <div className="flex justify-between items-center px-3">
                            <h3>Estimated shipping & Handling</h3>
                            <p>${shippingCharge}</p>
                        </div>
                        <div className="flex justify-between items-center px-3">
                            <h3>Coupon Discounts</h3>
                            <p>${couponDiscount}</p>
                        </div>
                        <div className="flex justify-between items-center px-3 font-medium my-7">
                            <h3>Total</h3>
                            <p>${netTotal}</p>
                        </div>
                    </div>

                    <button className="border-[1px] border-black hover:bg-black hover:text-white transition px-3 py-1 rounded-md font-medium w-full mb-5">Check Out</button>
                </div>
            </div>
        </div>
    )
}

export default Cart