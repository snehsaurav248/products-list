import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <img src={product.image} alt={product.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-category">Category: {product.category}</p>
        <p className="product-price">Price: ${product.price.toFixed(2)}</p>
        <p className="product-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
