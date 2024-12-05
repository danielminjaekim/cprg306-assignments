"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item added: Name: ${name}, Quantity: ${quantity}, Category: ${category}`);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-gray-900 p-6 rounded-lg shadow-lg w-80 space-y-4"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
        className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex items-center justify-between w-full space-x-2">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="w-12 h-12 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          -
        </button>
        <span className="w-12 text-center text-xl font-bold text-white">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="w-12 h-12 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          +
        </button>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="flex-1 px-3 py-2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700"
      >
        +
      </button>
    </form>
  );
}
