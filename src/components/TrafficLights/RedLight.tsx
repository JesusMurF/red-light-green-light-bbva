import './TrafficLights.scss';

interface RedLightProps {
  isActive?: boolean;
  animated?: boolean;
  italic?: boolean;
  size?: 'normal' | 'large';
}

export const RedLight = ({
  isActive,
  size,
  italic,
  animated,
}: RedLightProps) => {
  return (
    <h1
      className={`title 
        ${isActive ? 'title--red' : ''} 
        ${animated ? 'animated' : ''} 
        ${size === 'large' ? 'title--large' : ''} 
        ${italic ? 'title--italic' : ''}`}
    >
      Red Light
    </h1>
  );
};
