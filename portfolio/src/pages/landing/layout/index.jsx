import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/index";
import Footer from "./footer/index";

export default function LandingLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-50">
        <Header />
      </header>

      {/* Scrollable Content */}
      <main className="flex-grow pt-[80px] overflow-y-auto">
        {/* 👆 Add top padding equal to header height */}
        <Outlet />
      </main>

      {/* Footer always at bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
