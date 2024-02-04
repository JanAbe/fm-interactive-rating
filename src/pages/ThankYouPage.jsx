import { Card } from "../components/Card.jsx";
import { ThankYou } from "../components/ThankYou.jsx";
import { Wizard } from "../components/Wizard.jsx";

export const ThankYouPage = () => {
  return (
    <article>
      <Card>
        <Wizard />
        <hr />
        <ThankYou />
      </Card>
    </article>
  );
};
