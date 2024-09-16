import React from "react";
import Header from "./Header";
import { Outlet } from "@remix-run/react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
