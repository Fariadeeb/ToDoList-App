import { combineReducers } from "redux";
import { operationalReducer } from "./todo/reducer";

export const rootReducer = combineReducers({
  operationalReducer,
});
