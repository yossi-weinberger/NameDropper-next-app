import ValuesGrid from "@/utils/components/valuesGrid/valuesGrid";
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
