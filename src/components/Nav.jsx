import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="brand" to="/">Diego Linn</Link>

        <nav className="links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Reach Out</Link>
        </nav>
      </div>
    </header>
  );
}
