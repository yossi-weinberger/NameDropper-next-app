import axios from "axios";
const SERVER_URL = "https://namedropper-express-back.onrender.com";
// const SERVER_URL = "http://localhost:3001";

// OLD VERS
// export const getAllSpeakers = async () => {
//   try {
//     const response = await axios.get(`${SERVER_URL}/categories`, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
//       },
//     });
//     return response.data.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export async function getCategoryById(_id) {
  try {
    const response = await fetch(`${SERVER_URL}/categories/${_id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getAllCategories() {
  try {
    const response = await fetch(`${SERVER_URL}/categories`, {
      // next: { : 10, tags: ["categories"] },
      cache: "no-cache",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
      },
    });
    const data = await response.json();
    console.log(data);
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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
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
//OLD VERSION
// export async function createNewCategory(body) {
//   try {
//     const response = await axios.post(`${SERVER_URL}/categories`, body, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

//FROM NETEF- NEED TO MODIFY
// export async function login(body) {
//   try {
//     const response = await axios.post(`${SERVER_URL}/users/login`, body);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// export async function register(body) {
//   try {
//     const response = await axios.post(`${SERVER_URL}/users/register`, body);
//     return response.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }
