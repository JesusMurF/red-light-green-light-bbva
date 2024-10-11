import React from "react";

import "./StepButton.scss";

interface StepButtonProps {
  variant: "StepLeft" | "StepRight";
  onClick: () => void;
}

const StepButton: React.FC<StepButtonProps> = ({ variant, onClick }) => {
  return (
    <button className="step-button" onClick={onClick}>
      {variant === "StepLeft" ? "Step left" : "Step right"}
    </button>
  );
};

export const StepButtonLeft: React.FC<Pick<StepButtonProps, "onClick">> = ({
  onClick,
}) => {
  return <StepButton variant="StepLeft" onClick={onClick} />;
};

export const StepButtonRight: React.FC<Pick<StepButtonProps, "onClick">> = ({
  onClick,
}) => {
  return <StepButton variant="StepRight" onClick={onClick} />;
};
