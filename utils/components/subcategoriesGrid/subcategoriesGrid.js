import Link from "next/link";
import "./subcategoriesGrid.css";

const SubcategoriesGrid = ({ subcategories }) => {
  if (!Array.isArray(subcategories)) {
    return <div>No subcategories found.</div>;
  }

  return (
    <div className="grid-container">
      <div className="grid">
        {subcategories.map((category) => (
          <Link
            key={category._id}
            href={`/categories/${category._id}`}
            className="grid-item"
          >
            <h2>{category.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesGrid;
