import './TrafficLights.scss';

interface GreenLightProps {
  isActive?: boolean;
  animated?: boolean;
  italic?: boolean;
  size?: 'normal' | 'large';
}

/**
 * Green light component
 * @param {boolean} isActive - Indicates if the light is active
 * @param {boolean} italic - Indicates if the text is italic
 * @param {string} size - Indicates the size of the text
 * @param {boolean} animated - Indicates if the text is animated
 * @returns JSX.Element
 */
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
      data-testid="green-light"
    >
      Green Light
    </h1>
  );
};
