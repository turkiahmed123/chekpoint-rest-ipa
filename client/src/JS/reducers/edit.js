import { TOOGLE_FALSE, TOOGLE_TRUE } from "../constants/edit";
import { toggleFalse } from "../actions/edit"
const initialState = {
  edit: false,
};

export const editReducer = (state = initialState, { type }) => {
  switch (type) {
    case TOOGLE_TRUE:
      return { ...state, edit: true };

    case TOOGLE_FALSE:
      return { ...state, edit: false };

    default:
      return state;
  }
};
