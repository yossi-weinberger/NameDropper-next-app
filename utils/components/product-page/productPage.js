// import { Button, CircularProgress } from "@mui/material";
// import Navbar from "../navbar/navbar";
// import "./productPage.css";
// import { useEffect, useState } from "react";
// import { useLoadingContext } from "../../contexts/loadingContext";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// export default function ProductPage() {
//   const [product, setProduct] = useState(null);
//   const { loading, setLoading } = useLoadingContext();
//   const { id } = useParams();

//   useEffect(() => {
//     const getProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `http://localhost:3001/products/${id}`,
//           {
//             headers: {
//               Authorization:
//                 "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYxYmM0YTBkYzcwMTA3N2Y2NTAxNGYiLCJpYXQiOjE3MTA5MjcwOTB9.IZ4yEMeOqbHD3J8_XxGn6afXeU1XLyFqM8KVg5vbITE",
//             },
//           }
//         );
//         setProduct(response.data);
//         // console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     getProduct();
//   }, []);
//   return (
//     <div className="column">
//       <Navbar />
//       {loading ? (
//         <CircularProgress />
//       ) : (
//         product && (
//           <div className="product-page">
//             <div className="row top-section">
//               <div className="image-container">
//                 <img src={product.data.img} alt={product.data.title} />
//               </div>
//               <div className="column details">
//                 <h1>{product.data.title}</h1>
//                 <Button variant="contained">{product.data.price}</Button>
//               </div>
//             </div>
//             <div className="description">
//               <p>{product.data.desc}</p>
//             </div>
//           </div>
//         )
//       )}
//     </div>
//   );
// }
