import thankyouImage from "../assets/images/illustration-thank-you.svg";
import { useContext } from "react";
import { RatingContext } from "../store/rating-context.jsx";

export const ThankYou = () => {
  const { selectedRating } = useContext(RatingContext);

  return (
    <div className="thankyou-card-content">
      <img src={thankyouImage} alt="a mobile phone with an orange debit card" />
      <p id="selected-score">You selected {selectedRating} out of 5</p>
      <h1>Thank you!</h1>
      <p className="thankyou-description">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};
