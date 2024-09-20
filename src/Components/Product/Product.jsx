import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { image, name, price, description } = product;

  return (
    <Link to={`/product/${product.id}`} className="bg-pink-100 shadow-xl rounded-lg cursor-pointer" data-testid="product-item">
      <img src={image} alt={name} className="w-full h-56 object-cover rounded-t-lg" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-gray-700">{description}</p>
        <p className="text-blue-500 font-bold mt-2">Price: ${price}</p>
      </div>
    </Link>
  );
};

export default Product;