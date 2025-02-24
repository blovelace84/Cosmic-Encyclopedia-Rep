import { Link } from "react-router-dom";
import NavigateBackButton from "./NavigateBackButton";
import data from "./data";

const CategoryPage = ({ category }) => {
  const filteredObjects = data.filter(item => item.category === category);
  if(filteredObjects.length === 0){
    return <h2>No objects found in this category.</h2>;
  }

  return (
    <div className="category-page">
      <NavigateBackButton />
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
