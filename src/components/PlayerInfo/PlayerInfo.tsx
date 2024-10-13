import { Player } from '../../models/player';

interface PlayerInfoProps {
  player: Player;
}

export const PlayerInfo: React.FC<PlayerInfoProps> = ({
  player: { name, score, highScore },
}) => (
  <div>
    <h1>{name}</h1>
    <h2>Puntuación: {score}</h2>
    <h2>Record: {highScore}</h2>
  </div>
);
