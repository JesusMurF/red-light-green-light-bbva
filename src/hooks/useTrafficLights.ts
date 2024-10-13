import { useState, useEffect } from 'react';
import { TrafficLights, TrafficLightsColors } from '../models/trafficLights';

const redDuration = 3000;

export const useTrafficLights = (score: number) => {
  const [trafficLights, setTrafficLights] = useState<TrafficLights>(
    TrafficLightsColors.Red
  );

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
