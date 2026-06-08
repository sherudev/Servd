"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const RANDOM_RECIPES = [
  "Rustic Tomato Basil Pasta",
  "Garlic Butter Shrimp Pasta",
  "Lemon Herb Chicken",
  "One-Pot Veggie Stir-Fry",
  "Maple Glazed Salmon",
  "Spicy Chicken Tacos",
  "Creamy Mushroom Risotto",
  "Thai Coconut Curry",
  "Caprese Salad",
  "Chocolate Banana Pancakes",
];

export default function SurpriseMeButton() {
  const router = useRouter();

  const handleClick = () => {
    const randomRecipe =
      RANDOM_RECIPES[Math.floor(Math.random() * RANDOM_RECIPES.length)];
    router.push(`/recipe?cook=${encodeURIComponent(randomRecipe)}`);
  };

  return (
    <Button
      type="button"
      onClick={handleClick}
      size="xl"
      variant="secondary"
      className="px-8 py-6 text-lg border-2 border-orange-600 bg-white text-orange-700 hover:bg-orange-50"
    >
      Surprise Me <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  );
}
