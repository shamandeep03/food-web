import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryList from "./CategoryList";
export default function Categories() {
  const [categorie, setCategorie] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/evomorf/js-assignment/main/categories.json";
    axios
      .get(url)
      .then((response) => setCategorie(response.data))
      .catch((error) => console.error(error));
  }, []);
  // console.log(categorie.drinks.categories)
  const objectKeys = Object.keys(categorie);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>Categories</h2>
          {objectKeys.map((key) => (
            <div key={key}>
              <div className="category"><h3>{key}</h3></div>
              <CategoryList categories={categorie[key].categories} categories_name={key} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
