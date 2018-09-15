export type Actions = "UPDATE_TIME" | "UPDATE_X" | "UPDATE_Y";

export interface IAction {
  type: Actions;
  payload: any;
}

export interface INumberAction extends IActions {
  payload: number;
}

export interface ITimeAction extends INumberAction {}

export interface IXAction extends INumberAction {}

export interface IYAction extends INumberAction {}
