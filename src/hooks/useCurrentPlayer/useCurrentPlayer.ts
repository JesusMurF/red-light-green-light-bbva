import { useLocalStorage } from '../useLocalStorage/useLocalStorage';
import { Player } from '../../models/player';

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
