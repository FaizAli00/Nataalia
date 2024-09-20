import React, { createContext, useState } from "react";
import categoryImage1 from "../../Assets/products/prod1.jpg";
import categoryImage2 from "../../Assets/products/prod2.jpg";
import categoryImage3 from "../../Assets/products/prod3.jpg";
import categoryImage4 from "../../Assets/products/prod4.jpg";
import categoryImage5 from "../../Assets/products/prod5.jpg";
import categoryImage6 from "../../Assets/products/prod6.jpg";

const CategoryContext = createContext({
  categories: [],
  setCategories: () => {},
  basename: "",
  setBasename: () => {},
});

const initialCategories = [
  {
    id: 1,
    name: "Product 1",
    image: categoryImage1,
    price: 29.99,
    description: "Product 1 description",
  },
  {
    id: 2,
    name: "Product 2",
    image: categoryImage2,
    price: 49.99,
    description: "Product 2 description",
  },
  {
    id: 3,
    name: "Product 3",
    image: categoryImage3,
    price: 49.99,
    description: "Product 3 description",
  },
  {
    id: 4,
    name: "Product 4",
    image: categoryImage4,
    price: 49.99,
    description: "Product 4 description",
  },
  {
    id: 5,
    name: "Product 5",
    image: categoryImage5,
    price: 49.99,
    description: "Product 5 description",
  },
  {
    id: 6,
    name: "Product 6",
    image: categoryImage6,
    price: 49.99,
    description: "Product 6 description",
  },
];

const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(initialCategories);
  const [basename, setBasename] = useState("/");

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, basename, setBasename }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider, CategoryContext };
