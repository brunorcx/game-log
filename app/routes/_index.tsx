// src/routes/index.tsx

import { MetaFunction } from "@remix-run/node";
import "../styles/index.less";
import { NavLink } from "@remix-run/react";

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
        <p>Welcome to the Game Log. Use the form to submit your game:</p>
        <NavLink to="/game-form" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
          Game Form
        </NavLink>
      </main>
    </div>
  );
}
