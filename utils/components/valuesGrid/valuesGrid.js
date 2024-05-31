"use client";
import { nanoid } from "nanoid";
import Link from "next/link";
import "./valuesGrid.css";
import { useState } from "react";
import { sortCategories } from "@/utils/functions/global_functions";
import { Sort_search } from "@/utils/components/sort-search/sort-search";

export default function ValuesGrid({ values }) {
  console.log("Values in ValuesGrid:", values);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState(0);

  const ValuesToShow = (values ?? [])
    .filter((value) => value?.name?.includes(search))
    .sort((a, b) => sortCategories(a, b, sortBy))
    .map((value) => <GridItem key={nanoid()} item={value} />);

  return (
    <div className="grid-container">
      <Sort_search
        sortBy={sortBy}
        setSortBy={setSortBy}
        setSearch={setSearch}
      />
      <div className="grid">
        {ValuesToShow.length > 0 ? ValuesToShow : <p>No values found</p>}
      </div>
    </div>
  );
}

function GridItem({ item }) {
  if (!item || !item._id || !item.imageUrl || !item.name || !item.description) {
    return null;
  }

  return (
    <Link href={`/categories/${item.category.name}/${item._id}`}>
      <div className="grid-item">
        <img src={item.imageUrl} alt={item.name} />
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      </div>
    </Link>
  );
}

// "use client";
// // import { nanoid } from "nanoid";
// import Link from "next/link";
// import "./valuesGrid.css";
// import { useState } from "react";
// import { sortCategories } from "@/utils/functions/global_functions";
// import { Sort_search } from "@/utils/components/sort-search/sort-search";
// // import { useLoadingContext } from "../../contexts/loadingContext.js";
// // import { CircularProgress } from "@mui/material";

// export default function ValuesGrid({ values }) {
//   console.log("Values in ValuesGrid:", values);
//   const [search, setSearch] = useState("");
//   const [sortBy, setSortBy] = useState(0);

//   const ValuesToShow = (values?.data ?? [])
//     .filter((value) => value?.name?.includes(search))
//     .sort((a, b) => sortCategories(a, b, sortBy))
//     .map((value) => <GridItem key={nanoid()} item={value} />);
//   // Render the grid of categories
//   return (
//     <div className="grid-container">
//       <Sort_search
//         sortBy={sortBy}
//         setSortBy={setSortBy}
//         setSearch={setSearch}
//       />

//       <div className="grid">
//         {ValuesToShow.length > 0 ? ValuesToShow : <p>No values found</p>}
//       </div>
//     </div>
//   );
// }

// function GridItem({ item }) {
//   if (!item || !item._id || !item.imageUrl || !item.name || !item.description) {
//     return null;
//   }
//   return item && item._id ? (
//     <Link href={`/values/${item._id}`}>
//       <div className="grid-item">
//         <img src={item.imageUrl} />
//         <div>
//           <h2>{item.name}</h2>
//           <p>{item.description}</p>
//           {/* <p className="rtl">{item.desc}</p> */}
//           {/*
//           <div className="buy-cart">
//             <button>buy</button>
//             <button>cart</button>
//           </div> */}
//         </div>
//       </div>
//     </Link>
//   ) : null;
// }