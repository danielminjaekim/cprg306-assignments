"use client";

import { useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Sort by:</p>
        <div className="flex space-x-4">
          <button
            onClick={() => setSortBy("name")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              sortBy === "name"
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Name
          </button>
          <button
            onClick={() => setSortBy("category")}
            className={`px-4 py-2 rounded-lg font-semibold ${
              sortBy === "category"
                ? "bg-orange-500 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Category
          </button>
        </div>
      </div>
      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}
