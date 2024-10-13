import { Link } from 'react-router-dom';
import './Navbar.scss';
import { usePlayerState } from '../../hooks/usePlayerState';

export const Navbar = () => {
  const { currentPlayer } = usePlayerState();
  return (
    <header className="navbar">
      <span className="navbar__title">BBVA Games</span>
      {currentPlayer.name && (
        <Link
          to={'/'}
          onClick={() => localStorage.removeItem('currentPlayer')}
          className="navbar__exit"
        >
          Salir
        </Link>
      )}
    </header>
  );
};
