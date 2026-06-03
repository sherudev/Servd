import RecipeGrid from "@/components/RecipeGrid";
import { getMealsByArea } from "@/actions/mealdb.actions";

function formatSlug(value) {
  return decodeURIComponent(value)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function CuisineRecipesPage({ params }) {
  const { cuisine } = await params;
  const formattedCuisine = formatSlug(cuisine);
  const mealsData = await getMealsByArea(formattedCuisine);

  return (
    <RecipeGrid
      type="cuisine"
      value={formattedCuisine}
      initialData={mealsData}
      backLink="/dashboard"
    />
  );
}
