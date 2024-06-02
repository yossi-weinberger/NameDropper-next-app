import Image from "next/image";
import "./valuePage.css";

export default function ValuesPage({ value }) {
  // console.log("Value in ValuesPage:", JSON.stringify(value, null, 2));

  if (!value) {
    return <div>Invalid value data</div>;
  }

  return (
    <div className="values-page">
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
              <h2>{value.content.background.shortDescription}</h2>
              <p>{value.content.background.longDescription}</p>
              <p>{value.content.syntax}</p>
            </>
          )}
          <h2>Related Tools:</h2>
          <ul>
            {value.relatedTools.map((tool, index) => (
              <li key={index}>{tool.name}</li>
            ))}
          </ul>
          <h2>Alternatives:</h2>
          <ul>
            {value.alternatives.map((alternative, index) => (
              <li key={index}>{alternative.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
