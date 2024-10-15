import React from 'react';
import { Link } from 'react-router-dom';
import { useCurrentPlayer } from '../../hooks';

import './Navbar.scss';

/**
 * Navbar component
 * @returns {JSX.Element}
 */
export const Navbar: React.FC = () => {
  const { currentPlayer } = useCurrentPlayer();

  return (
    <nav className="navbar" data-testid="navbar">
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
    </nav>
  );
};
