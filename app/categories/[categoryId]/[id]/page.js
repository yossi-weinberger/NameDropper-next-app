import ValuesPage from "@/utils/components/valuePage/valuePage";
import { getValueById } from "@/utils/functions/apiCalls";

export default async function ValuePage({ params }) {
  const { id } = params;
  const value = await getValueById(id);
  console.log("Received ID:", id);
  // console.log(value);
  // console.log(value.data);

  return (
    <div>
      {/* <p>{value}</p>
      <p>value</p> */}
      <ValuesPage value={value.data} />
    </div>
  );
}
// import { useRouter } from 'next/router';
// import ValuesPage from "@/utils/components/valuePage/valuePage";
// import { getValueById } from "@/utils/functions/apiCalls";

// export default async function ValuesPage() {
//   const router = useRouter();
//   const { id } = router.query;
//   const value = await getValueById(id);
//   console.log(value);

//   return (
//     <div>
//       <ValuesPage value={value} />
//     </div>
//   );
// }

// import ValuesPage from "@/utils/components/valuePage/valuePage";
// import { getValueById } from "@/utils/functions/apiCalls";
// // import Image from "next/image";

// export default async function ValuesPage() {
//   const value = await getValueById(_id);
//   console.log(value);

//   return (
//     <div>
//       <ValuesPage value={value} />
//     </div>
//   );
// }

// import { getCategoryById } from "@/utils/functions/apiCalls";
// // import { getCookie } from "cookies-next";
// // import { cookies } from "next/headers";
// import Image from "next/image";

// export default async function Category({ params: { _id } }) {
//   //   const token = getCookie("token", { cookies });
//   const category = await getCategoryById(_id);
//   // console.log(category.data);
//   return (
//     <div className="column center">
//       <Image
//         className="img"
//         width={300}
//         height={300}
//         // style={{ objectFit: "contain" }}
//         src={category.data.img}
//         alt={category.data.title}
//       />

//       <div className="column rtl">
//         <h1>{category.data.title}</h1>
//         {/* <span>{category.data.price}₪</span> */}
//         <p>{category.data.desc}</p>
//       </div>
//     </div>
//   );
// }
