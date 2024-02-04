import star from "../assets/images/icon-star.svg";
import { useContext } from "react";
import { RatingContext } from "../store/rating-context.jsx";
import { UIContext } from "../store/ui-context.jsx";

export const RatingForm = () => {
  const { selectedRating, selectRating } = useContext(RatingContext);
  const { selectStep } = useContext(UIContext);

  function handleSubmit(event) {
    event.preventDefault();

    if (selectedRating) {
      selectStep((prevState) => prevState + 1);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <img className="star" src={star} alt="star symbol" />
      <h1>How did we do?</h1>

      <fieldset>
        <legend>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </legend>
        <div className="scores">
          <input
            aria-label="one"
            type="radio"
            name="rating"
            className={selectedRating === 1 ? "selected" : ""}
            onClick={() => selectRating(1)}
          />
          <input
            aria-label="two"
            type="radio"
            name="rating"
            className={selectedRating === 2 ? "selected" : ""}
            onClick={() => selectRating(2)}
          />
          <input
            aria-label="three"
            type="radio"
            name="rating"
            className={selectedRating === 3 ? "selected" : ""}
            onClick={() => selectRating(3)}
          />
          <input
            aria-label="four"
            type="radio"
            name="rating"
            className={selectedRating === 4 ? "selected" : ""}
            onClick={() => selectRating(4)}
          />
          <input
            aria-label="five"
            type="radio"
            name="rating"
            className={selectedRating === 5 ? "selected" : ""}
            onClick={() => selectRating(5)}
          />
        </div>
      </fieldset>

      <button>Submit</button>
    </form>
  );
};
