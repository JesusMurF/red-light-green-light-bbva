import { useState } from 'react';
import { useLocalStorage } from '../useLocalStorage/useLocalStorage';
import { useCurrentPlayer } from '../useCurrentPlayer/useCurrentPlayer';
import { Player } from '../../models/player';

/**
 * Update the player scores and persist them in local storage
 * @returns {Object} - Current player, score, updatePlayerState, calculateNewScore
 */
export const usePlayerState = () => {
  const { currentPlayer, setCurrentPlayer } = useCurrentPlayer();
  const [, setPlayers] = useLocalStorage<Player[]>('players', []);
  const [lastButtonClicked, setLastButtonClicked] = useState<string>('');
  const [score, setScore] = useState<number>(currentPlayer.score);

  /**
   * Updates the player state and persists it in local storage
   * @param {string} direction - The direction of the button clicked
   * @param {number} newScore - The accumulate score of the player
   */
  const updatePlayerState = (direction: string, newScore: number): void => {
    setLastButtonClicked(direction);
    setScore(newScore);

    const updatedCurrentPlayer = {
      ...currentPlayer,
      score: newScore,
      highScore: Math.max(newScore, currentPlayer.highScore),
    };
    // Update the current player in local storage
    setCurrentPlayer(updatedCurrentPlayer);

    // Update the current player in the list of players in local storage
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === currentPlayer.name ? updatedCurrentPlayer : player
      )
    );
  };

  /**
   * Calculates the new score based on the direction of the button clicked
   * @param {string} direction - The direction of the button clicked
   * @returns {number} The new score added or subtracted
   */
  const calculateNewScore = (direction: string): number => {
    const isSameDirection = lastButtonClicked === direction;
    const newScore = isSameDirection ? score - 1 : score + 1;
    return Math.max(newScore, 0);
  };

  return {
    currentPlayer,
    score,
    updatePlayerState,
    calculateNewScore,
  };
};
