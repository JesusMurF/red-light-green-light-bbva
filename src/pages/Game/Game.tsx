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

enum TrafficLightsColors {
  Red = 'red',
  Green = 'green',
}

enum Directions {
  Left = 'left',
  Right = 'right',
}

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
      <PlayerInfo player={currentPlayer}></PlayerInfo>
      <RedLight isActive={trafficLights === TrafficLightsColors.Red} />
      <GreenLight isActive={trafficLights === TrafficLightsColors.Green} />
      <StepButtonLeft setDirection={() => handleStepClicked(Directions.Left)} />
      <StepButtonRight
        setDirection={() => handleStepClicked(Directions.Right)}
      ></StepButtonRight>
    </>
  );
}
