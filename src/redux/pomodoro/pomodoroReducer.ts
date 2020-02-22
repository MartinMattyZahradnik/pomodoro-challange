import { IPomodoroReducerType } from "./pomodoroTypes";

function pomodoroReducer(state: IPomodoroReducerType = {}, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}

export default pomodoroReducer;
