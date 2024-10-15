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
import { usePlayerState, useTrafficLights } from '../../hooks';
import { Directions, TrafficLightsColors } from '../../models/trafficLights';

import './Game.scss';

export default function Game() {
  const { currentPlayer, score, updatePlayerState, calculateNewScore } =
    usePlayerState();
  const { trafficLights } = useTrafficLights(score);
  const navigate = useNavigate();

  // Check if current light is red
  const clickedOnRedLight = () => trafficLights === TrafficLightsColors.Red;

  // Vibrate the device
  const vibrate = (duration: number) => {
    if (navigator.vibrate) {
      navigator.vibrate(duration);
    }
  };

  /**
   * If the player clicked on the red light, vibrate the device and set the score to 0
   * If not, calculate the new score based on the direction of the button clicked
   * and update the player state
   * @param {string} direction
   */
  const handleStepClicked = (direction: string): void => {
    const isRedLight = clickedOnRedLight();
    if (isRedLight) {
      vibrate(500);
    }
    const newScore = isRedLight ? 0 : calculateNewScore(direction);
    updatePlayerState(direction, newScore);
  };

  // Redirect to the home page if the player is not logged in
  useEffect(() => {
    if (!currentPlayer.name) {
      navigate('/');
    }
  }, [currentPlayer, navigate]);

  return (
    <>
      <Navbar />
      <main className="game-container" data-testid="game">
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
            testId="step-button-left"
          />
          <StepButtonRight
            setDirection={() => handleStepClicked(Directions.Right)}
            testId="step-button-right"
          ></StepButtonRight>
        </section>
      </main>
    </>
  );
}
