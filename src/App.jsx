import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Category from "../src/Components/Categories/Categories";
import Navbar from "../src/Components/Navbar/Navbar";
import ProductDetail from "./Components/productDetail/ProductDetail";
import Hero from "./Components/hero/Hero";


function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export default App;
