import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './pages/Error';
import Categories from './pages/Categories';
import Basket from './pages/Basket';
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
    ,
  },
  {
    path: "/error",
    element: <Error />
    ,
  },
  {
    path: "/categories",
    element: <Categories />
    ,
  },
  {
    path: "/basket",
    element: <Basket />
    ,
  },
  {
    path: "/allproducts",
    element: <Products />
    ,
  },
  {
    path: "/user/:userID",
    element: <></>
    ,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider basename="/" router={router}>
     
    </RouterProvider> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
