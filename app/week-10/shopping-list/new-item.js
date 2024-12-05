"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => setQuantity((prev) => Math.min(prev + 1, 20));
  const decrement = () => setQuantity((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      quantity,
      category,
    };
    onAddItem(newItem);
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
    >
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Item name"
        required
        className="w-full px-3 py-2 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          -
        </button>
        <span className="text-lg font-bold text-white">{quantity}</span>
        <button
          type="button"
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          +
        </button>
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full px-3 py-2 rounded-lg text-black focus:ring-2 focus:ring-blue-500"
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
      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-700"
      >
        Add Item
      </button>
    </form>
  );
}
