import ValuesPage from "@/utils/components/valuePage/valuePage";
import { getValueById } from "@/utils/functions/apiCalls";

export default async function ValuePage({ params }) {
  const { id } = params;
  const value = await getValueById(id);
  // console.log("Received ID:", id);
  // console.log(value);
  // console.log(value.data);

  return (
    <div>
      <ValuesPage value={value.data} />
    </div>
  );
}
