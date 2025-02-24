import { Link } from "react-router-dom";
import data from "./data";

const CategoryPage = ({ category }) => {
  const filteredObjects = data.filter(item => item.category === category);

  return (
    <div className="category-page">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
      <ul>
        {filteredObjects.map(object => (
          <li key={object.id}>
            <Link to={`/content/${object.id}`}>{object.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
