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
