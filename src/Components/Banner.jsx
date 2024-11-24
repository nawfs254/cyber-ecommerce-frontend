const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-[#211C24] to-[#211C24] flex flex-col md:flex-row gap-5 md:gap-3 px-4 lg:px-36 text-white md:h-[400px] lg:h-[600px] pt-10">
            <div className="flex flex-col text-center md:text-left items-center md:items-start justify-center banner-text w-full md:w-1/2 space-y-4">
                <p className="opacity-40 text-2xl md:text-lg font-semibold lg:text-2xl">Pro.Beyond.</p>
                <h1 className="text text-7xl md:text-5xl lg:text-7xl"><span className="font-extralight">IPhone 14</span> Pro</h1>
                <p className="text-[#909090] font-medium text base md:text-sm lg:text-base">Created to change everything for the better. For everyone</p>
                <button className="font-medium text-base md:text-sm lg:text-base border-2 px-14 py-4 rounded-md border-white">Shop Now</button>
            </div>

            <div className=" h-80  md:h-auto banner-img w-full md:w-1/2 bg-[url('/assets/hero.png')] pt-20 bg-cover">
            </div>
        </div>
    )
}

export default Banner