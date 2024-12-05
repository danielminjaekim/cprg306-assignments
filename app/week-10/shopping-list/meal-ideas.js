"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const mealIdeas = await fetchMealIdeas(ingredient);
      setMeals(mealIdeas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full">
      <h2 className="font-bold text-2xl mb-4 text-white">
        Meal Ideas for "{ingredient || "Nothing Selected"}"
      </h2>
      <ul className="space-y-4">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="bg-gray-700 p-4 rounded-lg flex items-center space-x-4"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-16 h-16 rounded-lg"
            />
            <span className="text-white font-bold">{meal.strMeal}</span>
          </li>
        ))}
        {meals.length === 0 && (
          <li className="text-gray-400">No meal ideas found.</li>
        )}
      </ul>
    </div>
  );
}
