import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <nav className="nav">
        {/* Logo */}
        <div className="nav__logo"></div>
        {/* Links */}
        <div className="nav__links">
          <Link className="nav__link" to="/">
            Inicio
          </Link>
          <Link className="nav__link" to="/products">
            Productos
          </Link>
        </div>
        {/* Actions */}
        <div className="nav__actions">
          <button>
            <i class="fa-solid fa-user"></i>
          </button>
        </div>
      </nav>
    </header>
  );
}
