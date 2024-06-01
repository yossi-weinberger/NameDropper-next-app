import Image from "next/image";

export default function ValuesPage({ value }) {
  console.log("Value in ValuesPage:", JSON.stringify(value, null, 2));

  if (!value) {
    return <div>Invalid value data</div>;
  }

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
        <h1>{value.name}</h1>
        <h1>{value.description}</h1>
        {/* נוודא שהשדות קיימים לפני הניסיון לגשת אליהם */}
        {value.content && value.content.background && (
          <>
            <h1>{value.content.background.shortDescription}</h1>
            <p>{value.content.background.longDescription}</p>
            <p>{value.content.syntax}</p>
          </>
        )}
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
//         <h1>{value.name}</h1>
//         <h1>{value.description}</h1>
//         <h1>{value.content.background.shortDescription}</h1>
//         <p>{value.content.background.longDescription}</p>
//         <p>{value.content.syntax}</p>
//       </div>
//     </div>
//   );
// }
