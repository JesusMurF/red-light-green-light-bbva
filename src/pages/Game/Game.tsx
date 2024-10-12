import { useEffect, useState } from "react";
import {
  GreenLight,
  RedLight,
  StepButtonLeft,
  StepButtonRight,
} from "../../components";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { Player } from "../../models/player";

type TrafficLights = "red" | "green";

export default function Game() {
  const [currentPlayer, setCurrentPlayer] = useLocalStorage("currentPlayer", {
    name: "",
    score: 0,
    highScore: 0,
  });
  const [, setPlayers] = useLocalStorage("players", [] as Player[]);
  const [lastButtonClicked, setLastButtonClicked] = useState("");
  const [score, setScore] = useState(currentPlayer.score);
  const [trafficLights, setTrafficLights] = useState<TrafficLights>("red");
  const navigate = useNavigate();

  const fixedRedDuration = 3000;
  const minGreenDuration = 2000;
  const maxGreenDuration = 10000;

  const handleButtonClick = (direction: string) => {
    const newScore = trafficLights === "red" ? 0 : calculateNewScore(direction);
    updatePlayerState(direction, newScore);
  };

  const calculateNewScore = (direction: string) => {
    const isSameDirection = lastButtonClicked === direction;
    const newScore = isSameDirection ? score - 1 : score + 1;
    return Math.max(newScore, 0);
  };

  const updatePlayerState = (direction: string, newScore: number) => {
    setLastButtonClicked(direction);
    setScore(newScore);

    const updatedCurrentPlayer = {
      ...currentPlayer,
      score: newScore,
      highScore: Math.max(newScore, currentPlayer.highScore),
    };

    setCurrentPlayer(updatedCurrentPlayer);
    setPlayers((prevPlayers) =>
      prevPlayers.map((player) =>
        player.name === currentPlayer.name ? updatedCurrentPlayer : player
      )
    );
  };

  const calculateGreenDuration = () => {
    const baseGreenDuration = maxGreenDuration - score * 100;
    const clampedGreenDuration = Math.max(baseGreenDuration, minGreenDuration);
    const randomVariation = Math.random() * 3000 - 1500;
    return clampedGreenDuration + randomVariation;
  };

  useEffect(() => {
    let intervalId: ReturnType<typeof setTimeout>;

    const handleGreenLight = () => {
      const greenDuration = calculateGreenDuration();
      console.log(greenDuration);
      intervalId = setTimeout(() => setTrafficLights("red"), greenDuration);
    };

    const handleRedLight = () => {
      intervalId = setTimeout(() => {
        setTrafficLights("green");
        handleGreenLight();
      }, fixedRedDuration);
    };

    if (trafficLights === "red") {
      handleRedLight();
    } else if (trafficLights === "green") {
      handleGreenLight();
    }

    return () => clearTimeout(intervalId);
  }, [trafficLights]);

  useEffect(() => {
    if (!currentPlayer.name) {
      navigate("/");
    }
  }, [currentPlayer, navigate]);

  return (
    <>
      <h1>{currentPlayer.name}</h1>
      <h2>Puntuación: {score}</h2>
      <RedLight isActive={trafficLights === "red"} />
      <GreenLight isActive={trafficLights === "green"} />
      <StepButtonLeft setDirection={() => handleButtonClick("left")} />
      <StepButtonRight
        setDirection={() => handleButtonClick("right")}
      ></StepButtonRight>
    </>
  );
}
