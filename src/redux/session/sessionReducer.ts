import { ISessionReducerType } from "./sessionTypes";

function sessionReducer(state: ISessionReducerType = null, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export default sessionReducer;
