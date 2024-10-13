import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentPlayer } from '../../hooks/useCurrentPlayer';

import './Navbar.scss';

/**
 * Navbar component
 * @returns {JSX.Element}
 */
export const Navbar: React.FC = () => {
  const { currentPlayer } = useCurrentPlayer();

  return (
    <header className="navbar">
      <span className="navbar__title">Red light, Green light by Jesús Mur</span>
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
