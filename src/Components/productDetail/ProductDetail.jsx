import React, { useContext } from 'react';
import { CategoryContext } from '../CategoryContext/CategoryContext';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { categories } = useContext(CategoryContext); // Get categories from context
  const { id } = useParams(); // Get the product ID from the URL

  const productId = parseInt(id, 10); // Ensure the ID is an integer
  const product = categories.find(cat => cat.id === productId);
  
  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="max-w-md rounded-md overflow-hidden shadow-xl my-4 py-2 w-full h-screen bg-pink-100 flex flex-col justify-center items-center">
      <img src={product.image} alt={product.name} className=" w-[440px] h-[480px] object-cover rounded-md" />
      <div className="px-6 py-4 flex flex-col items-center">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="text-gray-700">{product.description}</p>
        <p className="text-blue-500 font-bold mt-2">Price: ${product.price}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-200">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
