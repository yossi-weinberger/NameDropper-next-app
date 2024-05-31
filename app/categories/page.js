// import CategoriesGrid from "@/utils/components/categoriesGrid/categoriesGrid";
// import { getAllCategories } from "@/utils/functions/apiCalls";
// import Link from "next/link";

// export default async function CategoriesPage() {
//   const categoriesData = await getAllCategories();
//   const categories = categoriesData.data; // Access the 'data' property

//   return (
//     <div>
//       <h1>Categories</h1>
//       <CategoriesGrid categories={categories} />
//       {Array.isArray(categories) &&
//         categories.map((category) => (
//           <Link key={category._id} href={`/categories/${category._id}`}>
//             {category.name}
//           </Link>
//         ))}
//     </div>
//   );
// }

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

// // export default function CategoriesPage() {
// //   return <div className="main">categories</div>;
// // }

// // import Navbar from "../components/navbar/navbar";
// // "use client";
// // import CategoriesGrid from "@/utils/components/categoriesGrid/categoriesGrid";
// // import { getAllCategories } from "@/utils/functions/apiCalls";
// // import Image from "next/image";

// // export default async function CategoriesPage() {
// //   const categories = await getAllCategories();

// //   return (
// //     <div>
// //       <CategoriesGrid categories={categories} />
// //     </div>
// //   );
// // }

// // const Speakers = ({ speakers }) => {
// //   return (
// //     <div>
// //       <Navbar />
// //       <h1>speakers</h1>
// //       <p>This is the Contact page.</p>
// //       <ProductGrid categories={speakers} />
// //     </div>
// //   );
// // };

// // export async function getServerSideProps() {
// //   const speakers = await getAllSpeakers();
// //   return { props: { speakers } };
// // }

// // export default Speakers;
