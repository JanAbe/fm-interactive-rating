import { useContext } from "react";
import { UIContext } from "../store/ui-context.jsx";

export const Wizard = () => {
  const { step: currentStep, maxSteps } = useContext(UIContext);
  const steps = Array.from({ length: maxSteps }, (v, i) => i + 1);

  return (
    <ol className="wizard">
      {steps.map((s, index) => (
        <>
          <li key={index} className={ s === currentStep ? "wizard-item selected-wizard-item" : "wizard-item" }>
            {s}
          </li>
        </>
      ))}
      <span className="marker-line"></span>
    </ol>
  );
};
