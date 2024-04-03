// // import { Button, CircularProgress } from "@mui/material";
// // import Navbar from "../navbar/navbar";
// // import "./productPage.css";
// // import { useEffect, useState } from "react";
// // import { useRouter } from "next/router";

// // export default function ProductPage({params:{_id}}) {
// //   const [product, setProduct] = useState(null);
// //   const { query } = useRouter();
// //   const { id } = query;

// //   useEffect(() => {
// //     const getProduct = async () => {
// //       try {
// //         const response = await fetch(`http://localhost:3001/products/${id}`, {
// //           headers: {
// //             Authorization:
// //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
// //           },
// //         });
// //         const data = await response.json();
// //         setProduct(data);
// //       } catch (error) {
// //         console.error(error);
// //       }
// //     };
// //     if (id) {
// //       getProduct();
// //     }
// //   }, [id]);

// //   if (!product) {
// //     return (
// //       <div className="column">
// //         <Navbar />
// //         <CircularProgress />
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="column">
// //       <Navbar />
// //       <div className="product-page">
// //         <div className="row top-section">
// //           <div className="image-container">
// //             <img src={product.data.img} alt={product.data.title} />
// //           </div>
// //           <div className="column details">
// //             <h1>{product.data.title}</h1>
// //             <Button variant="contained">{product.data.price}</Button>
// //           </div>
// //         </div>
// //         <div className="description">
// //           <p>{product.data.desc}</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// export default function Speaker({ params: { id } }) {
//   return <div>Speaker {id}</div>;
// }

import { useRouter } from "next/router";

export default function productPage() {
  const router = useRouter();
  return <p>Post: {router.query.slug}</p>;
}
