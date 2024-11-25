import { FiUser } from "react-icons/fi"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import SignupImg from "../assets/signup.png"
import { FaGoogle } from "react-icons/fa6"
import { Link } from "react-router"
import { useForm } from "react-hook-form"

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onsubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="bg-[url('/assets/bg.jpg')] bg-cover backdrop-blur-[5px] bg-no-repeat py-10">
            <div className="px-4 md:px-10  bg-[#ffffff36] backdrop-blur-[1px] mx-4 md:mx-10 lg:mx-36 rounded-lg shadow-x">
                <div className="pt-5">
                    <h1 className="text-white text-center text-4xl font-bold ">Signup Here</h1>
                    <p className="text-white text-center w-full md:w-4/5 lg:w-3/5 mx-auto text-sm p-3">Welcome to Cyber! Create your account to explore the latest gadgets, exclusive deals, and personalized recommendations. Join us and elevate your shopping experience today!</p>
                </div>
                <div className="flex flex-col-reverse lg:flex-row items-centerl py-5">
                    <form onSubmit={handleSubmit(onsubmit)} className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center gap-1">
                        <div >
                            <p className="mb-1 text-white">Enter Your Email</p>
                            <label className="input input-bordered flex items-center gap-2 lg:w-4/5">
                                <MdOutlineEmail></MdOutlineEmail>
                                <input type="text" className="grow" placeholder="Email"
                                    {...register('email', { required: true })} />
                            </label>
                            {
                                errors.email && (
                                    <span className="text-red-500 text-sm font-medium">*This field is required</span>
                                )
                            }
                        </div>
                        <div>
                            <p className="mb-1 text-white">Enter Your Username</p>
                            <label className="input input-bordered flex items-center gap-2 lg:w-4/5">
                                <FiUser></FiUser>
                                <input type="text" className="grow" placeholder="Username"
                                    {...register("username", { required: true })} />
                            </label>
                            {
                                errors.username && (
                                    <span className="text-red-500 text-sm font-medium">*This field is required</span>
                                )
                            }
                        </div>
                        <div>
                            <p className="mb-1 text-white">Enter Your Password</p>
                            <label className="input input-bordered flex items-center gap-2 lg:w-4/5">
                                <RiLockPasswordLine></RiLockPasswordLine>
                                <input type="password" className="grow" placeholder="Password"
                                    {...register('password', { pattern:{value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).{6,}$/, message: '*Password should contain a minimum of 6 letters, 1 uppercase, and 1 special character'}, required: '*This field is required'})} />
                            </label>
                            {
                                errors.password && (
                                    <div className="w-full md:w-4/5 text-red-500 text-sm font-medium">{errors.password.message}</div>
                                )
                            }
                        </div>
                        <div>
                            <p className="mb-1 text-white">Confirm Your Password</p>
                            <label className="input input-bordered flex items-center gap-2 lg:w-4/5">
                                <RiLockPasswordLine></RiLockPasswordLine>
                                <input type="password" className="grow" placeholder="Confirm Password"
                                    {...register('confirmPassword', { required: '*This field is required',validate: (value => value === watch('password') || "Both password must be matched!") })} />
                            </label>
                            {
                                errors.confirmPassword && (
                                    <span className="text-red-500 text-sm font-medium">{errors.confirmPassword.message}</span>
                                )
                            }
                        </div>
                        <p className="text-white">
                            Already Have an Account? <Link to="/signin">Signin</Link> Here
                        </p>
                        <button type="submit" className="bg-black lg:w-4/5 rounded-md py-3 my-2 text-white font-medium border-2 border-black hover:bg-[url('/assets/btn-bg.jpg')] hover:border-transparent bg-cover transition-all">
                            Signup
                        </button>
                        <p className="text-white font-bold text-center lg:w-4/5">OR</p>
                        <button className="bg-black lg:w-4/5 rounded-md py-3 my-2 text-white font-medium border-2 border-black hover:bg-[url('/assets/btn-bg.jpg')] hover:border-transparent bg-cover transition-all flex gap-3 items-center justify-center">
                            Signup with Google <FaGoogle></FaGoogle>
                        </button>
                    </form>
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img src={SignupImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup