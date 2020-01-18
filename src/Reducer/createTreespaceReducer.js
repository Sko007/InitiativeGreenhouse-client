import {TREESPACE} from "../Actions/treespace"

export default function(state = null, action) {
  switch (action.type) {
    case TREESPACE:
      return  action.payload;

    default:
      return state;
  }
}
