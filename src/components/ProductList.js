import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
export default function ProductList() {
  const [product, setProduct] = useState([]);
  const { id,parcat, subcat } = useParams();
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/evomorf/js-assignment/main/products.json";
    axios
      .get(url)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, []);
  const filteredProducts = product.filter((product) =>
    product.sub_cat_ids.includes(id)
  );
  return (
    <>
      <ul className="list2">
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <div className="product">
              <img
                src={product.pic}
                alt={product.name}
                height="100px"
                width="100px"
              />
              <div className="prouct-details">
                <span className="prod_name">{product.name}</span>
                <span className="prod_price">${product.price}</span>
                <span className="prod_cat">{subcat}({parcat})</span>
                <span className="prod_cat">{product.description}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
