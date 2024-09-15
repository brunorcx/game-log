// src/routes/index.tsx

import { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react"; // Import Outlet to render nested routes
import "../styles/index.less";

export const meta: MetaFunction = () => {
  return [{ title: "Game Log" }, { name: "description", content: "Welcome to Game-log!" }];
};

export default function Index() {
  return (
    <div>
      <header>
        <h1 className="hello">Hello World!</h1>
      </header>
      <main>
        <p>Welcome to the Game Log. Use the form below to submit your game:</p>
        {/* Outlet will render the nested route, like game.tsx */}
        <Outlet />
      </main>
    </div>
  );
}
