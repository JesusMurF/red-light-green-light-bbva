import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { PlayerInfo } from './PlayerInfo';

describe('PlayerInfo', () => {
  const player = {
    name: 'Usuario',
    score: 100,
    highScore: 200,
  };

  test('renders PlayerInfo component', () => {
    render(<PlayerInfo player={player} />);
    const playerInfoElement = screen.getByTestId('player-info');
    expect(playerInfoElement).toBeInTheDocument();
  });

  test('displays player name', () => {
    render(<PlayerInfo player={player} />);
    const playerNameElement = screen.getByText(/Usuario/i);
    expect(playerNameElement).toBeInTheDocument();
  });

  test('displays player score', () => {
    render(<PlayerInfo player={player} />);
    const playerScoreElement = screen.getByText(/Puntuación: 100/i);
    expect(playerScoreElement).toBeInTheDocument();
  });

  test('displays player high score', () => {
    render(<PlayerInfo player={player} />);
    const playerHighScoreElement = screen.getByText(/Record: 200/i);
    expect(playerHighScoreElement).toBeInTheDocument();
  });
});
