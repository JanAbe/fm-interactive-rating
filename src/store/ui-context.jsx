import { createContext } from "react";

export const UIContext = createContext({
  step: 1,
  selectStep: () => {},
});
