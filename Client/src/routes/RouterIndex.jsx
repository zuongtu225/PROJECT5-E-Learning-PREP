import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";
import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout";
import { Login } from "../pages/Auth/Login/Login";
import { Register } from "../pages/Auth/Register/Register";
import Home from "../pages/User/home";
import { PageNotFound } from "../components/errors/page-not-found/PageNotFound";
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
