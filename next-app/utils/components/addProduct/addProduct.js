"use client";

import { createNewProduct } from "@/utils/functions/apiCalls";
import "./addProduct.css";
// import { TextField } from "@mui/material";
import SubmitBtn from "../submitBtn/submitBtn";

export default function AddProductForm() {
  const createProduct = async (event) => {
    // event.preventDefault();
    const formData = new FormData(event.target);
    const body = Object.fromEntries(formData);
    await createNewProduct(body);
  };

  return (
    <div className="form">
      <form className="form" onSubmit={createProduct}>
        <h1>Add new product</h1>
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

        <SubmitBtn className="form_input submit" text="Add product" />
      </form>
    </div>
  );
}
