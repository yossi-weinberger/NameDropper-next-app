// export default function CategoriesPage() {
//   return <div className="main">categories</div>;
// }

// import Navbar from "../components/navbar/navbar";
"use client";
import ProductsGrid from "@/utils/components/productsGrid/productsGrid";
import { getAllSpeakers } from "@/utils/functions/apiCalls";

export default async function SpeakersPage() {
  const speakers = await getAllSpeakers();
  return (
    <div>
      <ProductsGrid products={speakers} />
    </div>
  );
}

// const Speakers = ({ speakers }) => {
//   return (
//     <div>
//       <Navbar />
//       <h1>speakers</h1>
//       <p>This is the Contact page.</p>
//       <ProductGrid products={speakers} />
//     </div>
//   );
// };

// export async function getServerSideProps() {
//   const speakers = await getAllSpeakers();
//   return { props: { speakers } };
// }

// export default Speakers;
