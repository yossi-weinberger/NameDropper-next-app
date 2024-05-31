// import ValuesGrid from "@/utils/components/valuesGrid/valuesGrid";
import ValuesGrid from "@/utils/components/valuesGrid/valuesGrid";
// import { getCategoryById } from "@/utils/functions/apiCalls";
import { getValuesByCategoryId } from "@/utils/functions/apiCalls";

// import Image from "next/image";

export default async function ValuesPage({ params: { categoryId } }) {
  //   const token = getCookie("token", { cookies });
  const values = await getValuesByCategoryId(categoryId);
  // console.log(categoryId);
  // console.log(values.data);
  return (
    <div>
      <ValuesGrid values={values.data} />
    </div>
  );
}

// export default async function categoryPage({ params }) {
//   const { categoryId } = params;
//   const values = await getValuesBycategoryId(categoryId);

//   return (
//     <div>
//       <h1>{categoryId}</h1>
//       <ValuesGrid values={values} />
//     </div>
//   );
// }

// import CategoriesGrid from "@/utils/components/categoriesGrid/categoriesGrid";
// import { getAllValues } from "@/utils/functions/apiCalls";
// import Image from "next/image";

// export default async function categoryPage() {
//   // const values = await getAllValues();
//   const values = await getValuesBycategoryId();
//   // console.log(values);

//   return (
//     <div>
//       <CategoriesGrid values={values} />
//     </div>
//   );
// }

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
