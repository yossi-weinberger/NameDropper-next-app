import ValuesGrid from "@/utils/components/valuesGrid/valuesGrid";
import { getValuesByCategoryName } from "@/utils/functions/apiCalls";

export default async function ValuesPage({ params: { categoryName } }) {
  const values = await getValuesByCategoryName(categoryName);

  return (
    <div>
      <ValuesGrid values={values.data} />
    </div>
  );
}
