import Image from "next/image";

export default function ValuesPage({ value }) {
  console.log(JSON.stringify(value));

  return (
    <div className="column center">
      <Image
        className="img"
        width={300}
        height={300}
        src={value.imageUrl}
        alt={value.name}
      />
      <div className="column rtl">
        <h1>{value.content.background.shortDescription}</h1>
        <p>{value.content.background.longDescription}</p>
        <p>{value.content.syntax}</p>
      </div>
    </div>
  );
}
// import Image from "next/image";

// export default function ValuesPage({ value }) {
//   console.log(JSON.stringify(value));

//   return (
//     <div className="column center">
//       <Image
//         className="img"
//         width={300}
//         height={300}
//         src={value.imageUrl}
//         alt={value.name}
//       />
//       <div className="column rtl">
//         <h1>{value.content.background.shortDescription}</h1>
//         <p>{value.content.background.longDescription}</p>
//         <p>{value.content.syntax}</p>
//       </div>
//     </div>
//   );
// }
