import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const Brands = () => {
    const techBrands = ["Apple", "Samsung", "Microsoft", "Google", "Amazon", "Intel", "IBM", "Dell", "HP", "Lenovo", "Asus", "Acer", "Sony", "Nvidia", "Qualcomm", "Cisco", "Oracle", "Tesla", "SpaceX", "Adobe", "AMD"];

    return (
        <div>
            <label className="input input-bordered flex items-center gap-2 mr-5 mb-2 h-9">
                <HiMiniMagnifyingGlass></HiMiniMagnifyingGlass>
                <input type="text" className="grow" placeholder="Search" />
            </label>
            {
                techBrands.map((brand, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <input type="checkbox" className="checkbox rounded-sm w-4 h-4" />
                        <span>{brand}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Brands