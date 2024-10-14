import { Player } from '../../models/player';

import './PlayerInfo.scss';

interface PlayerInfoProps {
  player: Player;
}

/**
 * Shows the player's information
 * @returns JSX.Element
 */
export const PlayerInfo: React.FC<PlayerInfoProps> = ({
  player: { name, score, highScore },
}) => (
  <section className="player-info-container" data-testid="player-info">
    <h1 className="player-info-container__username">{name}</h1>
    <div className="player-info-container__score">
      <h2>Puntuación: {score}</h2>
      <h2>Record: {highScore}</h2>
    </div>
  </section>
);
