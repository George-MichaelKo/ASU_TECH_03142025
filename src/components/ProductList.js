// src/components/ProductList.js
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const category = `phone`

  // fetch advert data from dummyjson API
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${category}`)
      .then(response => setProducts(response.data.products))
      .catch(error => console.error("Error fetching data:", error));
  }, []);


const handleConfirm = () => {
    if (window.confirm("Accept cookies to personalize experience?")) {
      console.log()
    } else {
      console.log("User cancelled");
    }
  };
  useEffect(() =>{
    handleConfirm();
  },[])

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
