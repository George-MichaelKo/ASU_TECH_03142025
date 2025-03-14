// src/components/ProductCard.js
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <span className="rating">⭐ {product.rating.rate} ({product.rating.count} reviews)</span>
    </div>
  );
};

export default ProductCard;
