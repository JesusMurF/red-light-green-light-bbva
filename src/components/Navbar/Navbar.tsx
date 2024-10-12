import { Link } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="navbar">
      <span className="navbar__title">BBVA Games</span>
      <Link
        to={"/"}
        onClick={() => localStorage.removeItem("currentPlayer")}
        className="navbar__exit"
      >
        Salir
      </Link>
    </header>
  );
};
