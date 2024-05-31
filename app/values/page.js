import ValuesGrid from "@/utils/components/valuesGrid/valuesGrid";
import { getAllValues } from "@/utils/functions/apiCalls";
import Image from "next/image";

export default async function ValuesPage() {
  const values = await getAllValues();
  // console.log(values);

  return (
    <div>
      <ValuesGrid values={values} />
    </div>
  );
}

// import CategoriesGrid from "@/utils/components/categoriesGrid/categoriesGrid";
// import { getValuesBycategoryId } from "@/utils/functions/apiCalls";
// import { notFound } from "next/navigation";

// export default async function CategoryPage({ params }) {
//   const { categoryId } = params;

//   try {
//     const values = await getValuesBycategoryId(categoryId);
//     return (
//       <div>
//         <h1>{categoryId}</h1>
//         <CategoriesGrid categories={values} />
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching values:", error);
//     notFound();
//   }
// }
