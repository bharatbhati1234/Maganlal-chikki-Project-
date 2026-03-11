import { getCategories, getProductsbyCategory } from "@/libs/api";
import CategorySectionsClient from "./ProductClient";

export default async function CategorySections() {
  const categories = await getCategories();

  const categoriesWithProducts = await Promise.all(
    categories.map(async (category) => {
      const products = await getProductsbyCategory(category.id);
      return { ...category, products };
    }),
  );

  return <CategorySectionsClient data={categoriesWithProducts} />;
}
