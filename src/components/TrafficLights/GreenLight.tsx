import "./TrafficLights.scss";

interface GreenLightProps {
  isActive: boolean;
}

export const GreenLight = ({ isActive }: GreenLightProps) => {
  return (
    <h1 className={`title ${isActive ? "title--green" : ""}`}>Green Light</h1>
  );
};
