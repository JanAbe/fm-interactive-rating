import { createContext } from "react";

export const UIContext = createContext({
  step: 1,
  maxSteps: 2,
  selectStep: () => {},
});
