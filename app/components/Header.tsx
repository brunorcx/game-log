import { NavLink } from "@remix-run/react";
import "../styles/header.less";

export default function Header() {
  return (
    <div>
      <header>
        <h1 className="hello">Hello World!</h1>
        <nav>
          <NavLink to="/" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink to="/game-form" className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")}>
            Game Form
          </NavLink>
        </nav>
      </header>
      <main></main>
    </div>
  );
}
