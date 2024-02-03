import star from "../assets/images/icon-star.svg";

export const RatingForm = ({ onSubmit, selectedScore, onSelectScore }) => {
  return (
    <form onSubmit={onSubmit}>
      <img className="star" src={star} alt="star symbol" />
      <h1>How did we do?</h1>

      <fieldset>
        <legend>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </legend>
        <div className="scores">
          <input
            aria-label="A rating of one"
            type="radio"
            name="rating"
            className={selectedScore === 1 ? "selected" : ""}
            onClick={() => onSelectScore(1)}
          />
          <input
            aria-label="A rating of two"
            type="radio"
            name="rating"
            className={selectedScore === 2 ? "selected" : ""}
            onClick={() => onSelectScore(2)}
          />
          <input
            aria-label="A rating of three"
            type="radio"
            name="rating"
            className={selectedScore === 3 ? "selected" : ""}
            onClick={() => onSelectScore(3)}
          />
          <input
            aria-label="A rating of four"
            type="radio"
            name="rating"
            className={selectedScore === 4 ? "selected" : ""}
            onClick={() => onSelectScore(4)}
          />
          <input
            aria-label="A rating of five"
            type="radio"
            name="rating"
            className={selectedScore === 5 ? "selected" : ""}
            onClick={() => onSelectScore(5)}
          />
        </div>
      </fieldset>

      <button>Submit</button>
    </form>
  );
};
