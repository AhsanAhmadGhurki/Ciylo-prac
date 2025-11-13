import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/index";
import Footer from "./footer/index";

export default function LandingLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
