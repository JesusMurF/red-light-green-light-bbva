import React from "react";

interface StepButtonProps {
  variant: "StepLeft" | "StepRight";
  onClick: () => void;
}

export const StepButton: React.FC<StepButtonProps> = ({ variant, onClick }) => {
  return (
    <button onClick={onClick}>
      {variant === "StepLeft" ? "Step left" : "Step right"}
    </button>
  );
};
