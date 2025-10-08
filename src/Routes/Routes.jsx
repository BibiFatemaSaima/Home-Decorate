import { createBrowserRouter } from "react-router";

import Products from "../Pages/Products";
import Home from "../Pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
]);

export default router;
