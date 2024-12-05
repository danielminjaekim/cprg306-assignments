"use client";

import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/week-10");
      return;
    }

    const loadItems = async () => {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, [user, router]);

  const handleAddItem = async (newItem) => {
    try {
      const itemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanName = itemName
      .split(",")[0]
      .replace(/[^\w\s]/gi, "")
      .trim();
    setSelectedItemName(cleanName);
  };

  if (!user) {
    return null;
  }

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
