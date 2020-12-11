import { combineReducers } from "redux";
import { contactReducer } from "./contacts";
import { editReducer } from "./edit";
export const rootReducers = combineReducers({ contactReducer, editReducer });
