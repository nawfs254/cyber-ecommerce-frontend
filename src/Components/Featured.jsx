import ps5 from "../assets/featured.png"
import mac from "../assets/featured (2).svg"
import airpod from "../assets/featured (3).png"
import vision from "../assets/featured (4).png"

const Featured = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-1 md:gap-0">
            <div className="bg-white lg:col-span-2 px-5 py-5 md:py-0">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 md:relative md:h-60 top-0">
                        <img src={ps5} alt="" className="md:absolute z-0 md:scale-[1.6] md:-left-16 md:top-12 object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-2 text-center md:text-left">
                        <h3 className="text-4xl font-semibold">Playstation 5</h3>
                        <p className="text-[#909090] text-sm">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#EDEDED] lg:col-span-2 lg:row-span-2 flex px-5 ">
                <div className="flex flex-col md:flex-row-reverse justify-center items-center space-y-4">
                    <div className="w-full md:w-1/2 md:relative md:h-60 md:top-0 flex items-center justify-center">
                        <img src={mac} alt="" className="md:absolute -z-0 md:scale-[2.3] md:left-52 md:bottom-10" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-2 text-center md:text-left">
                        <h3 className="text-4xl font-semibold">Macbook Air</h3>
                        <p className="text-[#909090] text-sm">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#EDEDED] z-20 px-5 py-5 md:py-0">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 md:relative md:h-60 top-0">
                        <img src={airpod} alt="" className="md:absolute z-0 scale-75 md:scale-[1.6] md:-left-16 md:top-12 object-cover" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-2 text-center md:text-left">
                    <h3 className="text-4xl md:text-2xl font-semibold"><span className="font-light">Apple AirPods</span> Max</h3>
                        <p className="text-[#909090] text-sm md:text-xs">Computational audio. Listen, it&apos;s powerful</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#353535] text-white z-10 px-5 py-5 md:py-0">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full md:w-1/2 md:relative md:h-60 top-0">
                        <img src={vision} alt="" className="md:absolute z-0 scale-75 md:scale-[2] md:-left-8 md:bottom-24 object-cover md:transform md:scale-x-[-1]" />
                    </div>
                    <div className="w-full md:w-1/2 space-y-2 text-center md:text-left">
                    <h3 className="text-4xl md:text-2xl font-semibold"><span className="font-light">Apple Vision</span> Pro</h3>
                        <p className="text-sm md:text-xs">An immersive way to experience entertainment</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured