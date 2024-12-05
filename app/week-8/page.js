"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim();
    setSelectedItemName(cleanName);
  };

  return (
    <main className="bg-gray-900 min-h-screen text-white p-6 flex space-x-6">
      <div className="w-1/2 space-y-6">
        <h1 className="font-bold text-3xl">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
