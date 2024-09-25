"use client";

import { useState } from "react";

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex justify-center m-4 bg-white w-40">
            <p className="font-extrabold text-black m-3">{quantity}</p>
            <button onClick={decrement}
            disabled={quantity === 1}
            className="
            bg-blue-500
            hover:bg-blue-700
            active:bg-red-300 
            rounded w-8 h-8 m-2
            disabled:bg-gray-400 disabled:cursor-default">
            -</button>
            <button onClick={increment}
            disabled={quantity === 20}
            className="
            bg-blue-500
            hover:bg-blue-700
            active:bg-red-300 
            rounded w-8 h-8 mt-2
            disabled:bg-gray-400 disabled:cursor-default">
            +</button>
        </div>
    )
} 