import { combineReducers, createStore } from "redux";
import { noiseReducer } from "./reducers";
import { IState } from "./types";

const initialData: IState = {
  time: 0,
  x: 0,
  y: 0,
};

export const storeFactory = (initialState = initialData) =>
  createStore(combineReducers(noiseReducer), initialState);
