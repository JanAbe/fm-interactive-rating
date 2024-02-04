import { createContext } from "react";

export const RatingContext = createContext({
  selectedRating: undefined,
  selectRating: () => {},
});
