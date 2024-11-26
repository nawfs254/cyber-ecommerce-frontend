import { HiMiniMagnifyingGlass } from 'react-icons/hi2';

const ScrrenDiag = () => {
    const screenDiagonal = ["5.5\"", "6.1\"", "6.5\"", "6.7\"", "7.0\""];



    return (
        <div>
            <label className="input input-bordered flex items-center gap-2 mr-5 mb-2 h-9">
                <HiMiniMagnifyingGlass></HiMiniMagnifyingGlass>
                <input type="text" className="grow" placeholder="Search" />
            </label>
            {
                screenDiagonal.map((ram, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <input type="checkbox" className="checkbox rounded-sm w-4 h-4" />
                        <span>{ram}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ScrrenDiag