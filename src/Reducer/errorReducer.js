import { ERROR_CO2FORM } from "../Actions/error";

export default function(state = null, action) {
  switch (action.type) {
    case ERROR_CO2FORM:
      return action.payload;
    default:
      return state;
  }
}