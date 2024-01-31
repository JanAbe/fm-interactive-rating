import { Card } from "./components/Card.jsx";
import star from "./assets/images/icon-star.svg";
import { useState } from "react";
import thankyouImage from "./assets/images/illustration-thank-you.svg";

function App() {
  const [selectedScore, setSelectedScore] = useState(undefined);
  const [showScoreCard, setShowScoreCard] = useState(true);

  function handleSelectScore(score) {
    setSelectedScore(score);
  }

  function handleSubmit() {
    if (selectedScore) {
      setShowScoreCard(false);
    }
  }

  return (
    <div className="card-wrapper">
      {showScoreCard && (
        <Card>
          <img className="star" src={star} alt="star symbol" />
          <h1>How did we do?</h1>

          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="scores">
            <p className={selectedScore === 1 ? "score selected" : "score"} onClick={() => handleSelectScore(1)}>
              1
            </p>
            <p className={selectedScore === 2 ? "score selected" : "score"} onClick={() => handleSelectScore(2)}>
              2
            </p>
            <p className={selectedScore === 3 ? "score selected" : "score"} onClick={() => handleSelectScore(3)}>
              3
            </p>
            <p className={selectedScore === 4 ? "score selected" : "score"} onClick={() => handleSelectScore(4)}>
              4
            </p>
            <p className={selectedScore === 5 ? "score selected" : "score"} onClick={() => handleSelectScore(5)}>
              5
            </p>
          </div>

          <button onClick={handleSubmit}>Submit</button>
        </Card>
      )}
      {!showScoreCard && (
        <Card>
          <div className="thankyou-card-content">
            <img src={thankyouImage} alt="a mobile phone with an orange debit card"/>
            <p id="selected-score">You selected {selectedScore} out of 5</p>
            <h1>Thank you!</h1>
            <p className="thankyou-description">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
          </div>
        </Card>
      )}
    </div>
  );
}

export default App;
