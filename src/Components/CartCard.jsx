import { useState } from "react";

const CartCard = ({ cartItem, onUpdateItem }) => {
    const { title, images, price } = cartItem;

    const [orderCount, setOrderCount] = useState(1);

    const increase = () => {
        const newCount = orderCount + 1;
        setOrderCount(newCount);
        onUpdateItem(price, newCount); // Notify parent
    };

    const decrease = () => {
        if (orderCount > 1) {
            const newCount = orderCount - 1;
            setOrderCount(newCount);
            onUpdateItem(price, newCount); // Notify parent
        }
    };

    return (
        <div className="flex gap-3 bg-gray-100 my-5 p-3 rounded-sm">
            <div className="bg-white rounded-sm">
                <div
                    className="w-28 h-28 bg-cover"
                    style={{ backgroundImage: `url(${images[0] || ""})` }}
                ></div>
            </div>
            <div>
                <h3 className="font-bold">{title}</h3>
                <p className="font-medium text-lg">$ {(price * orderCount).toFixed(2)}</p>

                <div className="flex">
                    <button
                        onClick={decrease}
                        className="bg-white w-4 flex items-center justify-center rounded-sm"
                    >
                        -
                    </button>
                    <div className="px-3">{orderCount}</div>
                    <button
                        onClick={increase}
                        className="bg-white w-4 flex items-center justify-center rounded-sm"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
