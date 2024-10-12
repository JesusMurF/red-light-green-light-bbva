import { StepButtonLeft, StepButtonRight } from "../../components";

export default function Game() {
  return (
    <>
      <StepButtonLeft onClick={() => console.log("Step left")} />
      <StepButtonRight
        onClick={() => console.log("Step right")}
      ></StepButtonRight>
    </>
  );
}
