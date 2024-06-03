import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import AddCategoryForm from "@/utils/components/addCategory/addCategory";

export default async function CreatePage() {
  const session = await getServerSession();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div>
      <AddCategoryForm />
    </div>
  );
}

// import AddCategoryForm from "@/utils/components/addCategory/addCategory";
// export default function CreatePage() {
//   return (
//     <div>
//       <AddCategoryForm />
//     </div>
//   );
// }
