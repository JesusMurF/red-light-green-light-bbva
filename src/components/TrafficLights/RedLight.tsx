import './TrafficLights.scss';

interface RedLightProps {
  isActive?: boolean;
  animated?: boolean;
  italic?: boolean;
  size?: 'normal' | 'large';
}

/**
 * Red light component
 * @param {boolean} isActive - Indicates if the light is active
 * @param {boolean} italic - Indicates if the text is italic
 * @param {string} size - Indicates the size of the text
 * @param {boolean} animated - Indicates if the text is animated
 * @returns JSX.Element
 */
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
      data-testid="red-light"
    >
      Red Light
    </h1>
  );
};
