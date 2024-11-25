import { FaGoogle } from "react-icons/fa6"
import { MdOutlineEmail } from "react-icons/md"
import { RiLockPasswordLine } from "react-icons/ri"
import { Link } from "react-router"
import SigninImg from "../assets/signin.png"
import { useForm } from "react-hook-form"
import useAuth from "../Hooks/useContext"
import toast, { Toaster } from "react-hot-toast"

const Signin = () => {
    const {register, handleSubmit} = useForm()

    const {signin} = useAuth()

    const onsubmit = (data) => {
        console.log(data)
        signin(data.email, data.password)
        .then(user => {
            console.log(user)
            toast.success(`Signed in successfully, ${user.user.displayName}`)
        })
        .catch(error => {
            toast.error(error.message)
        })
    }

    return (
        <>
        <Toaster></Toaster>
        <div className="bg-[url('/assets/bg.jpg')] bg-cover backdrop-blur-[5px] bg-no-repeat py-10">
            <div className="px-4 md:px-10  bg-[#ffffff36] backdrop-blur-[1px] mx-4 md:mx-10 lg:mx-36 rounded-lg shadow-x">
                <div className="pt-5">
                    <h1 className="text-white text-center text-4xl font-bold ">Signin Here</h1>
                    <p className="text-white text-center w-full md:w-4/5 lg:w-3/5 mx-auto text-sm p-3">Welcome Back! Sign in to access your account, track orders, and enjoy personalized shopping tailored just for you.</p>
                </div>
                <form onSubmit={handleSubmit(onsubmit)} className="flex flex-col-reverse lg:flex-row items-centerl py-5">
                    <div className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center gap-1">
                        <div>
                            <p className="mb-1 text-white">Enter Your Email</p>
                            <label className="input input-bordered flex items-center gap-2 lg:w-4/5">
                                <MdOutlineEmail></MdOutlineEmail>
                                <input type="text" className="grow" placeholder="Email"
                                {...register('email')} />
                            </label>
                        </div>
                        <div>
                            <p className="mb-1 text-white">Enter Your Password</p>
                            <label className="input input-bordered flex items-center gap-2 lg:w-4/5">
                                <RiLockPasswordLine></RiLockPasswordLine>
                                <input type="password" className="grow" placeholder="Password" 
                                {...register('password')}/>
                            </label>
                        </div>
                        <p className="text-white">
                            New User? <Link to="/signup">Signup</Link> Here
                        </p>
                        <button type="submit" className="bg-black lg:w-4/5 rounded-md py-3 my-2 text-white font-medium border-2 border-black hover:bg-[url('/assets/btn-bg.jpg')] hover:border-transparent bg-cover transition-all">
                            Signin
                        </button>
                        <p className="text-white font-bold text-center lg:w-4/5">OR</p>
                        <button className="bg-black lg:w-4/5 rounded-md py-3 my-2 text-white font-medium border-2 border-black hover:bg-[url('/assets/btn-bg.jpg')] hover:border-transparent bg-cover transition-all flex gap-3 items-center justify-center">
                            Signup with Google <FaGoogle></FaGoogle>
                        </button>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <img src={SigninImg} alt="" />
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Signin