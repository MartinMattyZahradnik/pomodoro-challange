import {
  ISessionReducerType,
  SessionReducerActionsTypes
} from "./sessionTypes";
import { SET_ACTIVE_SESSION, INCREASE_SESSION_COUNT } from "./sessionConstants";
import {
  STOP_POMODORO,
  START_POMODORO
} from "redux/pomodoro/pomodoroConstants";

export const initialState = {
  id: null,
  type: null,
  sessionCount: 0,
  isStopped: false
};

function sessionReducer(
  state: ISessionReducerType = initialState,
  action: SessionReducerActionsTypes
) {
  switch (action.type) {
    case START_POMODORO:
      return {
        ...state,
        isStopped: false
      };

    case SET_ACTIVE_SESSION:
      return {
        ...state,
        ...action.payload
      };

    case STOP_POMODORO:
      return {
        ...state,
        isStopped: true
      };

    case INCREASE_SESSION_COUNT:
      return {
        ...state,
        sessionCount: state.sessionCount + action.payload
      };

    default:
      return state;
  }
}

export default sessionReducer;
