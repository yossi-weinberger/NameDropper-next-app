import { createNewCategory } from "@/utils/functions/apiCalls";
import "./addCategory.css";
import SubmitBtn from "../submitBtn/submitBtn";

export default function AddCategoryForm() {
  const createProduct = async (formData) => {
    "use server";
    const body = Object.fromEntries(formData);
    // console.log("Form data:", body); ///

    // הכן אובייקט תקין לשליחה
    const newCategory = {
      title: body.title,
      price: body.price,
      img: body.img,
      desc: body.desc,
      createdAt: new Date(),
    };

    try {
      const response = await createNewCategory(newCategory);
      // console.log(response);
      // עשה משהו עם התגובה החיובית
    } catch (error) {
      console.error(error);
      // טפל בשגיאה
    }
  };

  return (
    <div className="form">
      <form className="form" action={createProduct}>
        <h1>Add new category</h1>
        <input
          className="form_input"
          placeholder="title"
          label="title"
          name="title"
        />
        <input
          className="form_input"
          placeholder="price"
          label="price"
          name="price"
        />
        <input
          className="form_input"
          placeholder="img url"
          label="img"
          name="img"
        />
        <textarea
          className="form_input"
          placeholder="Description..."
          maxLength={200}
          name="desc"
        />
        <SubmitBtn className="form_input submit" text="Add category" />
      </form>
    </div>
  );
}

// "use client";

// import { createNewCategory } from "@/utils/functions/apiCalls";
// import "./addCategory.css";
// // import { TextField } from "@mui/material";
// import SubmitBtn from "../submitBtn/submitBtn";

// export default function AddCategoryForm() {
//   const createProduct = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const body = Object.fromEntries(formData);
//     await createNewCategory(body);
//   };

//   return (
//     <div className="form">
//       <form className="form" onSubmit={createProduct}>
//         <h1>Add new product</h1>
//         <input
//           className="form_input"
//           placeholder="title"
//           label="title"
//           name="title"
//         />
//         <input
//           className="form_input"
//           placeholder="price"
//           label="price"
//           name="price"
//         />
//         <input
//           className="form_input"
//           placeholder="img url"
//           label="img"
//           name="img"
//         />
//         <textarea
//           className="form_input"
//           placeholder="Description..."
//           maxLength={200}
//           name="desc"
//         />

//         <SubmitBtn className="form_input submit" text="Add product" />
//       </form>
//     </div>
//   );
// }
