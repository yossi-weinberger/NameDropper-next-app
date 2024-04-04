"use client";
import { nanoid } from "nanoid";
// import { speakersList } from "../../data/speakersLinks";
import Link from "next/link";
// import { products } from "../../screens/speakers";
import "./productsGrid.css";
import { useState } from "react";
import { sortProducts } from "@/utils/functions/global_functions";
import { Sort_search } from "@/utils/components/sort-search/sort-search";
// import { useLoadingContext } from "../../contexts/loadingContext.js";
// import { CircularProgress } from "@mui/material";

export default function ProductsGrid({ products }) {
  // State variables for the search input and the sort option
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);
  // const { loading } = useLoadingContext();
  // Filtering and sorting the products based on the search and sort states
  // const productsToShow = products.data;
  // console
  //   .log(products.data)
  //   .filter((product) => product.title.includes(search)) // Filter products based on search
  //   .sort((a, b) => sortProducts(a, b, sortBy)) // Sort products based on sort option
  //   .map((product) => <GridItem key={nanoid()} item={product} />); // Map each product to a GridItem component

  const productsToShow = products.data
    .filter((product) => product.title.includes(search)) // Filter products based on search
    .sort((a, b) => sortProducts(a, b, sortBy)) // Sort products based on sort option
    .map((product) => <GridItem key={nanoid()} item={product} />); // Map each product to a GridItem component

  // Render the grid of products
  return (
    <div className="grid-container">
      <Sort_search
        sortBy={sortBy}
        setSortBy={setSortBy}
        setSearch={setSearch}
      />

      <div className="grid">
        {productsToShow.length > 0 ? productsToShow : <p>No products found</p>}
      </div>
    </div>
  );
}

// Component to display a single product in the grid
// function GridItem({ item }) {
//   return (
//     <Link to={`/product/${item._id}`} className="grid-item">
//       <img src={item.img} />
//       <div>
//         <h2>{item.title}</h2>
//         <p>{item.price}</p>
//         <p>{item.desc}</p>

//         <div className="buy-cart">
//           <button>buy</button>
//           <button>cart</button>
//         </div>
//       </div>
//     </Link>
//   );
// }

function GridItem({ item }) {
  return item && item._id ? (
    <Link href={`/categories/${item._id}`}>
      <div className="grid-item">
        <img src={item.img} />
        <div>
          <h2>{item.title}</h2>
          <p>{item.price}</p>
          <p>{item.desc}</p>

          <div className="buy-cart">
            <button>buy</button>
            <button>cart</button>
          </div>
        </div>
      </div>
    </Link>
  ) : null;
}
