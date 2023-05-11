import React from "react";
import { Link } from "react-router-dom";
export default function CategoryList({ categories, categories_name }) {
  return (
    <div className="row">
      <div className="col-md-12">
        <ul className="list">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={"/product/" + category.id + "/parcat/" + categories_name + "/subcat/" + category.name}>
                <img
                  src={category.pic}
                  alt={category.name}
                  height="100px"
                  width="100px"
                />
                <p>{category.name}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
