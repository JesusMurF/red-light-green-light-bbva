import './TrafficLights.scss';

interface RedLightProps {
  isActive: boolean;
}

export const RedLight = ({ isActive }: RedLightProps) => {
  return <h1 className={`title ${isActive ? 'title--red' : ''}`}>Red Light</h1>;
};
