import {
  GET_CONTACT_FAIL,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_LOAD,
  GET_CONTACT,
} from "../constants/contacts";

// initialstate

const initialstate = {
  contacts: [],
  loadContacts: false,
  errors: null,
  user: {},
};

export const contactReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case GET_CONTACT_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACT_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACT_FAIL:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACT:
      return { ...state, user: payload };

    default:
      return state;
  }
};
