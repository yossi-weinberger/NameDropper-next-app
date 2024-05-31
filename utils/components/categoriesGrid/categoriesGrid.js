"use client";
import { nanoid } from "nanoid";
// import { speakersList } from "../../data/speakersLinks";
import Link from "next/link";
// import { Categories } from "../../screens/speakers";
import "./categoriesGrid.css";
import { useState } from "react";
import { sortCategories } from "@/utils/functions/global_functions";
import { Sort_search } from "@/utils/components/sort-search/sort-search";
// import { useLoadingContext } from "../../contexts/loadingContext.js";
// import { CircularProgress } from "@mui/material";

export default function CategoriesGrid({ categories }) {
  // console.log(categories.data);
  // State variables for the search input and the sort option
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);
  // const { loading } = useLoadingContext();
  // Filtering and sorting the categories based on the search and sort states
  // const categoriesToShow = categories.data;
  // console
  //   .log(categories.data)
  //   .filter((product) => product.title.includes(search)) // Filter categories based on search
  //   .sort((a, b) => sortcategories(a, b, sortBy)) // Sort categories based on sort option
  //   .map((product) => <GridItem key={nanoid()} item={product} />); // Map each product to a GridItem component

  // const categoriesToShow = categories.data
  //   .filter((product) => product.title.includes(search)) // Filter categories based on search
  //   .sort((a, b) => sortCategories(a, b, sortBy)) // Sort categories based on sort option
  //   .map((product) => <GridItem key={nanoid()} item={product} />); // Map each product to a GridItem component

  const categoriesToShow = (categories?.data ?? [])
    .filter((category) => category?.name?.includes(search))
    .sort((a, b) => sortCategories(a, b, sortBy))
    .map((category) => <GridItem key={nanoid()} item={category} />);
  // Render the grid of categories
  return (
    <div className="grid-container">
      <Sort_search
        sortBy={sortBy}
        setSortBy={setSortBy}
        setSearch={setSearch}
      />

      <div className="grid">
        {categoriesToShow.length > 0 ? (
          categoriesToShow
        ) : (
          <p>No categories found</p>
        )}
      </div>
    </div>
  );
}

function GridItem({ item }) {
  return item && item._id ? (
    <Link href={`/categories/${item._id}`}>
      <div className="grid-item">
        <img src={item.imageUrl} />
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          {/* <p className="rtl">{item.desc}</p> */}
          {/* 
          <div className="buy-cart">
            <button>buy</button>
            <button>cart</button>
          </div> */}
        </div>
      </div>
    </Link>
  ) : null;
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
