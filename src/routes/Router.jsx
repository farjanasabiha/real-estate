import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";
import Login from './../pages/Login/Login';
import Register from "../pages/Register/Register";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import Property from "../pages/Property/Property";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("real-estate.json"),
      },
      {
        path: "/property",
        element: (
          <PrivateRoute>
            <Property></Property>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog/:id",
        element: <Blog></Blog>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);


export default router;