import RecipeGrid from "@/components/RecipeGrid";
import { getMealsByCategory } from "@/actions/mealdb.actions";

function formatSlug(value) {
  return decodeURIComponent(value)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function CategoryRecipesPage({ params }) {
  const { category } = await params;
  const formattedCategory = formatSlug(category);
  const mealsData = await getMealsByCategory(formattedCategory);

  return (
    <RecipeGrid
      type="category"
      value={formattedCategory}
      initialData={mealsData}
      backLink="/dashboard"
    />
  );
}
