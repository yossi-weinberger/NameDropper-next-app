import { getCategoryById } from "@/utils/functions/apiCalls";
// import { getCookie } from "cookies-next";
// import { cookies } from "next/headers";
import Image from "next/image";

export default async function Category({ params: { _id } }) {
  //   const token = getCookie("token", { cookies });
  const category = await getCategoryById(_id);
  console.log(category.data);
  return (
    <div className="row">
      <Image
        width={300}
        height={300}
        // style={{ objectFit: "contain" }}
        src={category.data.img}
      />

      <div className="column">
        <h1>{category.data.title}</h1>
        <span>{category.data.price}₪</span>
        <p>{category.data.desc}</p>
      </div>
    </div>
  );
}
