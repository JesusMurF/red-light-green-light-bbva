import { useState, useEffect } from 'react';

type TrafficLights = 'red' | 'green';

enum TrafficLightsColors {
  Red = 'red',
  Green = 'green',
}

const fixedRedDuration = 3000;
const minGreenDuration = 2000;
const maxGreenDuration = 10000;

export const useTrafficLights = (score: number) => {
  const [trafficLights, setTrafficLights] = useState<TrafficLights>(
    TrafficLightsColors.Red
  );

  const calculateGreenDuration = () => {
    const baseGreenDuration = maxGreenDuration - score * 100;
    const clampedGreenDuration = Math.max(baseGreenDuration, minGreenDuration);
    const randomVariation = Math.random() * 3000 - 1500;
    return clampedGreenDuration + randomVariation;
  };

  useEffect(() => {
    const switchLights = () => {
      setTrafficLights((prev) =>
        prev === TrafficLightsColors.Red
          ? TrafficLightsColors.Green
          : TrafficLightsColors.Red
      );
    };

    const interval = setInterval(
      switchLights,
      trafficLights === TrafficLightsColors.Red
        ? fixedRedDuration
        : calculateGreenDuration()
    );

    return () => clearInterval(interval);
  }, [trafficLights]);

  return {
    trafficLights,
  };
};
