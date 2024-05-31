import CategoriesGrid from "@/utils/components/categoriesGrid/categoriesGrid";
import { getAllCategories } from "@/utils/functions/apiCalls";
import Image from "next/image";

export default async function CategoriesPage() {
  const categories = await getAllCategories();
  // console.log(categories);

  return (
    <div>
      <CategoriesGrid categories={categories} />
    </div>
  );
}
