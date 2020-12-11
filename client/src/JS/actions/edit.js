import { TOOGLE_FALSE, TOOGLE_TRUE } from "../constants/edit";

export const toggleTrue = () => {
  return {
    type: TOOGLE_TRUE,
  };
};

export const toggleFalse = () => {
  return {
    type: TOOGLE_FALSE,
  };
};
