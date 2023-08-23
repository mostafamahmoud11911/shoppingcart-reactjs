import React from "react";
import Root from "./components/Root";
import Home from "./components/Home";
import Store from "./components/Store";
import About from "./components/About";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShoppingCartProvider from "./context/CartContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ShoppingCartProvider>
        <Root />
      </ShoppingCartProvider>
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
