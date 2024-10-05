// components/ProductCard.js

import React from 'react';

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p className="price">${product.price}</p>
      <button>Add to Cart</button>

      <style jsx>{`
        .product-card {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-5px);
        }

        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
        }

        h2 {
          font-size: 18px;
          margin: 15px 0 5px;
        }

        .price {
          font-size: 16px;
          color: #28a745;
        }

        button {
          padding: 10px 15px;
          background-color: #007BFF;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
