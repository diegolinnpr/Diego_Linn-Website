import { Link, useNavigate } from "react-router-dom";
import { getToken, clearToken } from "../authStore";

export default function Nav() {
  const navigate = useNavigate();
  const authed = Boolean(getToken());

  return (
    <header className="nav">
      <div className="nav__inner">
        <Link className="brand" to="/">Diego Linn</Link>

        <nav className="links">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Reach Out</Link>

          {authed ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <button
                className="btn btn--ghost"
                onClick={() => {
                  clearToken();
                  navigate("/");
                }}
              >
                Log out
              </button>
            </>
          ) : (
            <>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
