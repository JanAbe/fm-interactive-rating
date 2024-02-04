import { useContext } from "react";
import { UIContext } from "../store/ui-context.jsx";
import checkmark from "../assets/images/check-solid.svg";

export const Wizard = () => {
  const { step: currentStep, maxSteps } = useContext(UIContext);
  const steps = Array.from({ length: maxSteps }, (v, i) => i + 1);

  return (
    <ol className="wizard">
      {steps.map((s, index) => (
        <>
          <li key={index} className={ s === currentStep ? "wizard-item selected-wizard-item" : "wizard-item" }>
            {(s !== maxSteps && currentStep === maxSteps) ? <img className="checkmark" src={checkmark} alt="checkmark" /> : s}
          </li>
        </>
      ))}
      <span className="marker-line"></span>
    </ol>
  );
};
