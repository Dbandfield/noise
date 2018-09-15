import { IAction } from "./actions";
import { IState } from "./types";

export const noiseReducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "UPDATE_TIME":
      return { time: action.payload, ...state };
    case "UPDATE_X":
      return { x: action.payload, ...state };
    case "UPDATE_Y":
      return { y: action.payload, ...state };
    default:
      return state;
  }
};
