import UserHeader from "../../components/views/user/header/UserHeader";
import { Outlet } from "react-router-dom";
import React from "react";
const UserLayout = () => {
  return (
    <>
      <UserHeader />
      <Outlet />
    </>
  );
};
export default UserLayout;
