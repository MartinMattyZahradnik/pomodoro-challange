import {
  IPomodoroReducerType,
  PomodoroReducerActionsTypes
} from "./pomodoroTypes";
import {
  CREATE_POMODORO,
  COUNT_DOWN,
  COMPLETE_POMODORO
} from "./pomodoroConstants";

export const initialState = {};

function pomodoroReducer(
  state: IPomodoroReducerType = initialState,
  action: PomodoroReducerActionsTypes
) {
  switch (action.type) {
    case CREATE_POMODORO:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    case COUNT_DOWN:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          [action.payload.type]:
            state[action.payload.id][action.payload.type] - 1000
        }
      };

    case COMPLETE_POMODORO:
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          isComplete: true
        }
      };

    default:
      return state;
  }
}

export default pomodoroReducer;
