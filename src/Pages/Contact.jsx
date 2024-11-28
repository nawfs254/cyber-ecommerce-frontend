import { useForm } from "react-hook-form"
import { FaChrome, FaHome, FaMobile } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Contact = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <h1 className="text-4xl text-center font-bold my-4">Contact Us</h1>
            <div className="flex flex-col md:flex-row lg:mx-36">
                <div className="w-full md:w-1/2 space-y-3 flex flex-col m-3">
                    <h3 className="text-2xl font-bold">Address Detail</h3>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                        <FaHome size="1.5rem"></FaHome>
                        <div>
                        <p><span className="font-medium">Mirpur11:</span> Plot - 2, Ground Floor, Road - 11 Block - C, Dhaka 1216</p>
                        <p><span className="font-medium">Corporate Office:</span> United House, Madani Avenue, United City, Dhaka-1212</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                        <MdEmail size="1.5rem"></MdEmail>
                        <p>nawfs@cyber.bd</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                        <FaMobile size="1.5rem"></FaMobile>
                        <p>+880 1704 259187</p>
                    </div>
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2">
                        <FaChrome size="1.5rem"></FaChrome>
                        <p><a href="">https://www.cyber-bd.com/</a></p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 m-3">
                    <h3 className="text-2xl font-bold">Reach Us</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your name</span>
                            </div>
                            <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs" {...register("fullname")}/>
                        </label>
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="label-text">Your Phone</span>
                            </div>
                            <input type="text" placeholder="Phone Number" className="input input-bordered w-full max-w-xs" {...register("phone")}/>
                        </label>
                        <label className="form-control w-full max-w-xs md:max-w-full md:col-span-2">
                            <div className="label">
                                <span className="label-text">Your Email</span>
                            </div>
                            <input type="text" placeholder="E-mail Address" className="input input-bordered w-full" {...register("email")}/>
                        </label>

                        <label className="form-control w-full max-w-xs md:max-w-full md:col-span-2">
                            <div className="label">
                                <span className="label-text">Your Message</span>
                            </div>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Message" {...register("message")}></textarea>
                        </label>

                        <button className="bg-black w-full col-span-2 text-white py-3" type="submit">Send Message</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Contact