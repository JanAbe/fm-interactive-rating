import { useState } from "react";
import { Card } from "./components/Card.jsx";
import { ThankYouCard } from "./components/ThankYouCard.jsx";
import { RatingForm } from "./components/RatingForm.jsx";

function App() {
  const [selectedScore, setSelectedScore] = useState(undefined);
  const [showScoreCard, setShowScoreCard] = useState(true);

  function handleSelectScore(score) {
    setSelectedScore(score);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedScore) {
      setShowScoreCard(false);
    }
  }

  return (
    <main>
      <div className="card-wrapper">
        {showScoreCard && (
          <Card>
            <RatingForm
              onSubmit={handleSubmit}
              onSelectScore={handleSelectScore}
              selectedScore={selectedScore}
            />
          </Card>
        )}
        {!showScoreCard && <ThankYouCard selectedScore={selectedScore} />}
      </div>
    </main>
  );
}

export default App;
