"use client";

import useFetch from "@/hooks/use-fetch";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import RecipeCard from "./RecipeCard";

const RecipeGrid = ({
  type, // "category" or "cuisine"
  value, // actual category/cuisine name
  fetchAction, // server action to fetch meals
  initialData,
  backLink = "/dashboard",
}) => {
  const { loading, data, fn: fetchMeals } = useFetch(fetchAction);

  useEffect(() => {
    if (value && fetchAction && !initialData) {
      fetchMeals(value);
    }
  }, [fetchAction, fetchMeals, initialData, value]);

  const result = initialData || data;
  const meals = result?.meals || [];
  const displayName = value?.replace(/-/g, " ");

  return (
    <div className="min-h-screen bg-stone-50 pt-14 pb-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-stone-600 hover:text-orange-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-stone-900 capitalize tracking-tight leading-tight">
            {displayName}{" "}
            <span className="text-orange-600">
              {type === "cuisine" ? "Cuisine" : "Recipes"}
            </span>
          </h1>

          {!loading && meals.length > 0 && (
            <p className="text-stone-600 mt-2">
              {meals.length} delicious {displayName}{" "}
              {type === "cuisine" ? "dishes" : "recipes"} to try
            </p>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col justify-center items-center py-20">
            <Loader2 className="w-10 h-10 text-orange-600 animate-spin mb-4" />
            <p className="text-stone-500">Loading recipes...</p>
          </div>
        )}

        {/* Meals Grid - Using RecipeCard */}
        {!loading && meals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {meals.map((meal) => (
              <RecipeCard key={meal.idMeal} recipe={meal} variant="grid" />
            ))}
          </div>
        )}

        {!loading && meals.length === 0 && (
          <div className="border-2 border-dashed border-stone-200 bg-white p-10 text-center">
            <p className="text-lg font-semibold text-stone-900">
              No recipes found
            </p>
            <p className="mt-2 text-stone-600">
              MealDB did not return any {displayName}{" "}
              {type === "cuisine" ? "dishes" : "recipes"}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeGrid;
