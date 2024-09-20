import React, { Children } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { CategoryProvider } from './Components/CategoryContext/CategoryContext';
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Category from './Components/Categories/Categories';
import ProductDetail from './Components/productDetail/ProductDetail';
import Layout from './Components/layout/layout';
import Shop from './Components/Shop/Shop';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  children:[
    {
      path:"/",
      element:<Home />
    },
    {
      path: "/categories",
      element: <Category />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail />,
    },
    {
      path: "/shop",
      element: <Shop />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/contact-us",
      element: <ContactUs />,
    },
  ]
}
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CategoryProvider>
    <RouterProvider router={router}/>
    </CategoryProvider>
  </React.StrictMode>
);