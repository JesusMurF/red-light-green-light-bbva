import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '../../models/player';
import { useLocalStorage } from '../useLocalStorage/useLocalStorage';

/**
 * Login a player in the game
 * @returns {Function} - Handle login
 */
export const usePlayerLogin = () => {
  const [players, setPlayers] = useLocalStorage<Player[]>('players', []);
  const [currentPlayer, setCurrentPlayer] = useLocalStorage<Player>(
    'currentPlayer',
    {
      name: '',
      score: 0,
      highScore: 0,
    }
  );
  const navigate = useNavigate();

  /**
   * Find the player in the list of players, update the list and set it as the current player
   * @param {string} username - Player username
   */
  const handleLogin = (username: string): void => {
    const player = players.find(
      (player: Player) => player.name === username
    ) || { name: username, score: 0, highScore: 0 };

    if (!players.some((player: Player) => player.name === username)) {
      setPlayers([...players, player]);
    }

    setCurrentPlayer(player);
  };

  /**
   * Redirect to the game page if the player is logged in
   */
  useEffect(() => {
    if (currentPlayer.name) {
      navigate('/game');
    }
  }, [currentPlayer, navigate]);

  return { handleLogin };
};
