import { CALCULATION } from "../Actions/calculation";

export default function(state = null, action) {
    console.log("before reducer calculation", action.payload)
  switch (action.type) {
    case CALCULATION:
      return action.payload

    default:
      return state;
  }
}
