import { GETTREESPACE } from "../Actions/treespace";

export default function(state = null, action) {
  switch (action.type) {
    case GETTREESPACE:
      return action.payload;

    default:
      return state;
  }
}
