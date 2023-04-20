import { ClerkProvider } from "@clerk/clerk-react"
import React from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from "./App"
import Encriptar from "./Encriptar"
import Login from "./Login"
import SignUp from "./SignUp"
import "./styles/base.css"
import "./styles/icons.css"
import "./styles/style.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/encriptar",
    element: <Encriptar />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signUp",
    element: <SignUp />
  }
])

createRoot(document.getElementById("root")).render(
  <ClerkProvider
    publishableKey={
      "pk_test_cGxlYXNhbnQtbW9sbHVzay05NS5jbGVyay5hY2NvdW50cy5kZXYk"
    }>
    <RouterProvider router={router} />
  </ClerkProvider>
)
