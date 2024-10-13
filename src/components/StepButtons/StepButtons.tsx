import React from 'react';

import './StepButtons.scss';

interface StepButtonProps {
  variant: 'StepLeft' | 'StepRight';
  setDirection: () => void;
}

/**
 * Step button base component
 * @param {StepButtonProps} props - Component props
 * @returns JSX.Element
 */
const StepButton: React.FC<StepButtonProps> = ({ variant, setDirection }) => {
  return (
    <button className="step-button" onClick={setDirection}>
      {variant === 'StepLeft' ? 'Step left' : 'Step right'}
    </button>
  );
};

export const StepButtonLeft: React.FC<
  Pick<StepButtonProps, 'setDirection'>
> = ({ setDirection }) => {
  return <StepButton variant="StepLeft" setDirection={setDirection} />;
};

export const StepButtonRight: React.FC<
  Pick<StepButtonProps, 'setDirection'>
> = ({ setDirection }) => {
  return <StepButton variant="StepRight" setDirection={setDirection} />;
};
