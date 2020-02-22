import { IPomodoroReducerType } from "./pomodoroTypes";
import { CREATE_POMODORO } from "./pomodoroConstants";

function pomodoroReducer(state: IPomodoroReducerType = {}, action: any) {
  switch (action.type) {
    case CREATE_POMODORO:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    default:
      return state;
  }
}

export default pomodoroReducer;
