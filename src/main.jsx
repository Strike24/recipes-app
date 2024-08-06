import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";
import Recipes from "./pages/Recpies";
import LoginFormPage from "./pages/Login";
import Recipe from "./pages/recipes/Recpie";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "recipes",
    element: <Recipes />,
  },
  {
    path: "login",
    element: <LoginFormPage />,
  },
  {
    path: "recipe/:id",
    element: <Recipe />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
