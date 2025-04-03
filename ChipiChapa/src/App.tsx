import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login";
import About from "./Pages/About";
import CheckOutList from "./Pages/CheckOutList";
import ProductList from "./Pages/ProductList";
import AdminDashboard from "./Pages/AdminDashboard";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/checkout-list",
    element: <CheckOutList />,
  },
  {
    path: "/product-list",
    element: <ProductList />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
