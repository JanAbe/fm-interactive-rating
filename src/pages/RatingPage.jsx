import { Card } from "../components/Card.jsx";
import { RatingForm } from "../components/RatingForm.jsx";
import { Wizard } from "../components/Wizard.jsx";

export const RatingPage = () => {
  return (
    <article>
      <Card>
        <Wizard />
        <hr />
        <RatingForm />
      </Card>
    </article>
  );
};
