import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Auth/Login/Login";
import { PageNotFound } from "../components/errors/page-not-found/PageNotFound";
import UserLayout from "../layouts/user/UserLayout";
import AdminLayout from "../layouts/admin/AdminLayout";
import AuthLayout from "../layouts/auth/AuthLayout";
import Home from "../pages/User/home/Home";
import Register from "../pages/Auth/Register/Register";
const routes = [
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
  {
    path: "/admin-layout",
    element: <AdminLayout />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
];

const RouterIndex = () => {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element}>
          {route.children &&
            route.children.map((routeChildren, indexChildren) => (
              <Route
                key={indexChildren}
                path={routeChildren.path}
                element={routeChildren.element}
              ></Route>
            ))}
        </Route>
      ))}
    </Routes>
  );
};

export default RouterIndex;
