import { useState, useEffect } from 'react';
import { TrafficLights, TrafficLightsColors } from '../../models/trafficLights';

const redDuration = 3000;

/**
 * Simulate the traffic lights changing colors
 * @param {number} score - The player's score
 * @returns {TrafficLights} - The string traffic lights color
 */
export const useTrafficLights = (score: number) => {
  const [trafficLights, setTrafficLights] = useState<TrafficLights>(
    TrafficLightsColors.Red
  );

  /**
   * Calculate the green duration based on the player's score
   * @returns {number} - The green duration
   */
  const calculateGreenDuration = () => {
    return Math.max(10000 - score * 100, 2000) + Math.random() * 3000 - 1500;
  };

  useEffect(() => {
    const switchLights = () => {
      setTrafficLights((prev) =>
        prev === TrafficLightsColors.Red
          ? TrafficLightsColors.Green
          : TrafficLightsColors.Red
      );
    };

    // Set the interval to switch the lights
    const interval = setInterval(
      switchLights,
      trafficLights === TrafficLightsColors.Red
        ? redDuration
        : calculateGreenDuration()
    );

    return () => clearInterval(interval);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [trafficLights]);

  return {
    trafficLights,
  };
};
