import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CategoryContext } from "../CategoryContext/CategoryContext";

const Category = () => {
  const { categories } = useContext(CategoryContext);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 flex justify-center">
        Categories
      </h2>

      {/* Grid for categories */}
      <div className="grid grid-cols-3 py-4 gap-4">
        {categories.map((category) => (
          <Link
            to={`/product/${category.id}`}
            key={category.id}
            className="bg-pink-100 shadow-xl rounded-lg cursor-pointer"
            data-testid="category-link"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
