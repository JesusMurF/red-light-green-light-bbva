import "./Navbar.scss";

export const Navbar = () => {
  return (
    <header className="navbar">
      <span className="navbar__title">BBVA Games</span>
      <a href="/" className="navbar__exit">
        Salir
      </a>
    </header>
  );
};
