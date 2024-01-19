import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="container-fluid p-0 m-0 ">
      <Header />
      <div className="container my-4 h-100">
        <main className="bg-light p-2 rounded">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
