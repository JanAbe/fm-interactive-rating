import { useState } from "react";
import { RatingPage } from "./pages/RatingPage.jsx";
import { ThankYouPage } from "./pages/ThankYouPage.jsx";
import { RatingContext } from "./store/rating-context.jsx";
import { UIContext } from "./store/ui-context.jsx";

function App() {
  const [selectedRating, setSelectedRating] = useState(undefined);
  const [step, setStep] = useState(1);

  function handleSelectRating(rating) {
    setSelectedRating(rating);
  }

  function handleSelectStep(step) {
    if (step < 1 || step > 2) {
      return;
    }

    setStep(step);
  }

  const ratingContextValue = {
    selectedRating: selectedRating,
    selectRating: handleSelectRating,
  };

  const uiContextValue = {
    step: step,
    maxSteps: 2,
    selectStep: handleSelectStep,
  };

  return (
    <RatingContext.Provider value={ratingContextValue}>
      <UIContext.Provider value={uiContextValue}>
        <main className="card-wrapper">
          {step === 1 && <RatingPage />}
          {step === 2 && <ThankYouPage />}
        </main>
      </UIContext.Provider>
    </RatingContext.Provider>
  );
}

export default App;
