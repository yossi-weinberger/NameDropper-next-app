import axios from "axios";
import dotenv from "dotenv";
// const SERVER_URL = "https://namedropper-express-back.onrender.com";
const SERVER_URL = "https://name-dropper-express-back.vercel.app";
// const SERVER_URL = "http://localhost:3001";

dotenv.config();

export async function getAllCategories() {
  try {
    const response = await fetch(`${SERVER_URL}/categories`, {
      // next: { : 10, tags: ["categories"] },
      cache: "no-cache",
      headers: {
        Authorization: process.env.BEARER_TOKEN,
      },
    });
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }
    const data = await response.json();
    // console.log(
    //   "Response data from getValueById:",
    //   JSON.stringify(data, null, 2)
    // );
    // console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch or parse JSON:", error.message);
    throw new Error(error.message);
  }
}

export async function getValuesByCategoryName(categoryName) {
  try {
    const encodedCategoryName = encodeURIComponent(categoryName);
    const url = `${SERVER_URL}/categories/${encodedCategoryName}`;

    const response = await fetch(url, {
      headers: {
        Authorization: process.env.BEARER_TOKEN,
      },
    });

    // console.log("Response:", response); // Add this line to check the response

    const data = await response.json();

    // console.log("Data from API:", data); // Add this line to check the data

    return data;
  } catch (error) {
    console.error("Error fetching values by category name:", error);
    throw new Error(error.message);
  }
}

export async function getValueByCategoryAndValueName(categoryName, valueName) {
  try {
    const url = `${SERVER_URL}/categories/${encodeURIComponent(
      categoryName
    )}/${encodeURIComponent(valueName)}`;

    console.log("URL:", url);

    const response = await fetch(url, {
      headers: {
        Authorization: process.env.BEARER_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching value:", error);
    throw error;
  }
}
export async function getValueById(id) {
  try {
    const response = await fetch(`${SERVER_URL}/values/${id}`, {
      headers: {
        Authorization: process.env.BEARER_TOKEN,
      },
    });

    // בדיקת סטטוס התגובה
    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    // ניסיון לפענח את התגובה כ-JSON
    const data = await response.json();
    // console.log(
    //   "Response data from getValueById:",
    //   JSON.stringify(data, null, 2)
    // );

    return data;
  } catch (error) {
    console.error("Failed to fetch or parse JSON:", error.message);
    throw new Error(error.message);
  }
}

// export async function getValueById(id) {
//   try {
//     const response = await fetch(`${SERVER_URL}/values/${id}`, {
//       headers: {
//         Authorization: process.env.BEARER_TOKEN,
//       },
//     });
//     const data = await response.json();
//     console.log("Response data from getValueById:", data);
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// }

export async function getAllValues() {
  try {
    const response = await fetch(`${SERVER_URL}/values`, {
      // next: { : 10, tags: ["categories"] },
      cache: "no-cache",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
      },
    });
    const data = await response.json();
    console.log("data1:", data);
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function createNewCategory(categoryData) {
  try {
    const response = await axios.post(
      `${SERVER_URL}/categories`,
      categoryData,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.BEARER_TOKEN,
        },
      }
    );
    if (response.status !== 200) {
      const message = await response.text();
      throw new Error(message);
    }
    return { data: response.data, status: "success" };
  } catch (error) {
    console.error("Error creating new category:", error);
    throw error;
  }
}
