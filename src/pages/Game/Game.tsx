import { useEffect } from 'react';
import {
  GreenLight,
  Navbar,
  PlayerInfo,
  RedLight,
  StepButtonLeft,
  StepButtonRight,
} from '../../components';
import { useNavigate } from 'react-router-dom';
import { usePlayerState } from '../../hooks/usePlayerState';
import { useTrafficLights } from '../../hooks/useTrafficLights';

import './Game.scss';
import { Directions, TrafficLightsColors } from '../../models/trafficLights';

export default function Game() {
  const { currentPlayer, score, updatePlayerState, calculateNewScore } =
    usePlayerState();
  const { trafficLights } = useTrafficLights(score);
  const navigate = useNavigate();

  const handleStepClicked = (direction: string) => {
    const newScore =
      trafficLights === TrafficLightsColors.Red
        ? 0
        : calculateNewScore(direction);
    updatePlayerState(direction, newScore);
  };

  useEffect(() => {
    if (!currentPlayer.name) {
      navigate('/');
    }
  }, [currentPlayer, navigate]);

  return (
    <>
      <Navbar />
      <main className="game-container">
        <PlayerInfo player={currentPlayer} />
        <section className="flex">
          <RedLight
            size="large"
            isActive={trafficLights === TrafficLightsColors.Red}
            animated
            italic
          />
          <GreenLight
            size="large"
            isActive={trafficLights === TrafficLightsColors.Green}
            animated
            italic
          />
        </section>
        <section className="flex">
          <StepButtonLeft
            setDirection={() => handleStepClicked(Directions.Left)}
          />
          <StepButtonRight
            setDirection={() => handleStepClicked(Directions.Right)}
          ></StepButtonRight>
        </section>
      </main>
    </>
  );
}
