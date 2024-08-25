import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../components/layouts/AuthLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
// import { useContext } from "react";
// import { AuthContext } from "../contexts/AuthContext";
import Home from "../pages/app/Home";
import MainLayout from "../components/layouts/MainLayout";
// const auth = useContext(AuthContext);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        index: true,
        element: <Navigate to={"login"} />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
        children: [
          // {
          //   path: "/signup",
          //   element: <Users />,
          // },
        ],
      },
    ],
  },

  // },
  // {
  //   index: true,
  //   element: <Da />,
  // },
  // {
  //   path: "/test",
  //   element: <FriendList />,
  // },
  // { path: "*", element: <NotFound /> },
]);

//if not authenticaated redirect to login route else allow them to stay - mainlayout--check from local storage and context -(of which the initial state of the context is the query of the localStorage)
//if user is authenthecated,allow them to stay elseredirect  them to the mainlayout (home)
