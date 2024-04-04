import axios from "axios";
const SERVER_URL = "https://namedropper-express-back.onrender.com";
// const SERVER_URL = "http://localhost:3001";
// OLD VERS
// export const getAllSpeakers = async () => {
//   try {
//     const response = await axios.get(`${SERVER_URL}/products`, {
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
    const response = await fetch(`${SERVER_URL}/products/${_id}`, {
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
    const response = await fetch(`${SERVER_URL}/products`, {
      // next: { : 10, tags: ["products"] },
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

export async function createNewProduct(body) {
  try {
    const response = await fetch(`${SERVER_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message);
    }

    const data = await response.json();
    console.log(response.json());

    return { data: [data], status: "success" };
  } catch (error) {
    console.error("Error creating new product:", error);
    throw error;
  }
}
//OLD VERSION
// export async function createNewProduct(body) {
//   try {
//     const response = await axios.post(`${SERVER_URL}/products`, body, {
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
