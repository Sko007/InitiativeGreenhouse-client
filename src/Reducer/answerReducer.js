import { USER_ID } from "../Actions/answer";

export default function(state = null, action) {
  console.log("reducer for the user", action.payload);
  switch (action.type) {
    case USER_ID:
      return action.payload;

    default:
      return state;
  }
}


