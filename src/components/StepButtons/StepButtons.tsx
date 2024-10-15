import React from 'react';

import './StepButtons.scss';

interface StepButtonProps {
  variant: 'StepLeft' | 'StepRight';
  setDirection: () => void;
  testId?: string;
}

/**
 * Step button base component
 * @param {StepButtonProps} props - Component props
 * @returns JSX.Element
 */
const StepButton: React.FC<StepButtonProps> = ({
  variant,
  setDirection,
  testId,
}) => {
  return (
    <button className="step-button" onClick={setDirection} data-testid={testId}>
      {variant === 'StepLeft' ? 'Step left' : 'Step right'}
    </button>
  );
};

/**
 * Left step button
 * @param {Omit<StepButtonProps, 'variant'>} props - Indicates the direction of the step
 * @returns JSX.Element
 */
export const StepButtonLeft: React.FC<Omit<StepButtonProps, 'variant'>> = ({
  setDirection,
  testId,
}) => {
  return (
    <StepButton
      variant="StepLeft"
      setDirection={setDirection}
      testId={testId}
    />
  );
};

/**
 * Right step button
 * @param {Omit<StepButtonProps, 'variant'>} props - Indicates the direction of the step
 * @returns JSX.Element
 */
export const StepButtonRight: React.FC<Omit<StepButtonProps, 'variant'>> = ({
  setDirection,
  testId,
}) => {
  return (
    <StepButton
      variant="StepRight"
      setDirection={setDirection}
      testId={testId}
    />
  );
};
