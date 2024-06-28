import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import UpdateProfile from "../pages/UpdateProfile/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/updateProfile",
        element: <UpdateProfile></UpdateProfile>,
      },
    ],
  },
]);


export default router;