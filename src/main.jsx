import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Encriptar from "./Encriptar"
import Login from "./Login"
import "./styles/base.css"
import "./styles/icons.css"
import "./styles/style.css"
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "encriptar",
    element: <Encriptar />
  },
  {
    path: "login",
    element: <Login />
  },
]);

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={"pk_test_cGxlYXNhbnQtbW9sbHVzay05NS5jbGVyay5hY2NvdW50cy5kZXYk"}>
    <RouterProvider router={router} />
  </ClerkProvider>
)