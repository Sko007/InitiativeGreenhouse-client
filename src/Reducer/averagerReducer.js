import { KWH, MEAT, WATER, GASOLINE } from "../Actions/average";

export const averageKwh = function(state = null, action) {
  switch (action.type) {
    case KWH:
      return action.payload;

    default:
      return state;
  }
};

export const averageMeat = function(state = null, action) {
  switch (action.type) {
    case MEAT:
      return action.payload;

    default:
      return state;
  }
};

export const averageWater = function(state = null, action) {
  switch (action.type) {
    case WATER:
      return action.payload;

    default:
      return state;
  }
};

export const averageGasoline = function(state = null, action) {
  switch (action.type) {
    case GASOLINE:
      return action.payload;

    default:
      return state;
  }
};