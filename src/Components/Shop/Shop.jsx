import React, { useContext } from 'react';
import { CategoryContext } from '../CategoryContext/CategoryContext';
import Product from '../Product/Product'; // Import the Product component (explained later)

const Shop = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 flex justify-center">Shop</h2>
      <div className="grid grid-cols-3 py-4 gap-4">
        {categories.map((category) => (
          <Product key={category.id} product={category} />
        ))}
      </div>
    </div>
  );
};

export default Shop;