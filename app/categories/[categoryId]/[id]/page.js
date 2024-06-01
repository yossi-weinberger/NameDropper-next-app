import ValuesPage from "@/utils/components/valuePage/valuePage";
import { getValueById } from "@/utils/functions/apiCalls";

export default async function ValuePage({ params }) {
  const { id } = params;

  try {
    const value = await getValueById(id);
    console.log("Value data:", JSON.stringify(value, null, 2));

    if (!value || !value.data) {
      throw new Error("Invalid value data");
    }

    return (
      <div>
        <ValuesPage value={value.data} />
      </div>
    );
  } catch (error) {
    console.error("Error in ValuePage:", error.message);
    return <div>Failed to load value</div>;
  }
}

// export default async function ValuePage({ params }) {
//   const { id } = params;
//   const value = await getValueById(id);
//   console.log("Value data:", value);
//   // console.log("Received ID:", id);
//   // console.log(value);
//   // console.log(value.data);

//   return (
//     <div>
//       <ValuesPage value={value.data} />
//     </div>
//   );
// }
