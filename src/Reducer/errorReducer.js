import { ERROR_CO2FORM } from "../Actions/error";

export default function(state = null, action) {
  console.log("check if reducer gets error", action.payload)
  switch (action.type) {
    case ERROR_CO2FORM:
      return action.payload;
    default:
      return state;
  }
}