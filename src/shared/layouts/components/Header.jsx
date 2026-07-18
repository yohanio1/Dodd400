import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/signup">Crear cuenta</Link>
      </nav>
    </header>
  );
}