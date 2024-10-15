import { useLocalStorage } from '../useLocalStorage/useLocalStorage';
import { Player } from '../../models/player';

/**
 * Set and get current player of the game
 * @returns {Object} - Current player and set current player
 */
export const useCurrentPlayer = () => {
  const [currentPlayer, setCurrentPlayer] = useLocalStorage<Player>(
    'currentPlayer',
    {
      name: '',
      score: 0,
      highScore: 0,
    }
  );

  return { currentPlayer, setCurrentPlayer };
};
