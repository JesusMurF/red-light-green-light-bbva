import './TrafficLights.scss';

interface GreenLightProps {
  isActive?: boolean;
  animated?: boolean;
  italic?: boolean;
  size?: 'normal' | 'large';
}

export const GreenLight = ({
  isActive,
  italic,
  size = 'normal',
  animated,
}: GreenLightProps) => {
  return (
    <h1
      className={`title 
        ${isActive ? 'title--green' : ''} 
        ${animated ? 'animated' : ''}  
        ${size === 'large' ? 'title--large' : ''} 
        ${italic ? 'title--italic' : ''}`}
    >
      Green Light
    </h1>
  );
};
