import {
  CREATE_POMODORO,
  START_POMODORO,
  STOP_POMODORO,
  COUNT_DOWN,
  COMPLETE_POMODORO
} from "./pomodoroConstants";
import {
  IPomodoro,
  CreatePomodoroAction,
  StartPomodoroAction,
  StopPomodoroAction,
  CountDownAction,
  CompletePomodoroAction,
  CountDownType
} from "./pomodoroTypes";

export const createPomodoro = (payload: IPomodoro): CreatePomodoroAction => ({
  type: CREATE_POMODORO,
  payload
});

export const startPomodoro = (id: string): StartPomodoroAction => ({
  type: START_POMODORO,
  payload: { id }
});

export const stopPomodoro = (id: string): StopPomodoroAction => ({
  type: STOP_POMODORO,
  payload: { id }
});

export const completePomodoro = (id: string): CompletePomodoroAction => ({
  type: COMPLETE_POMODORO,
  payload: { id }
});

export const countDown = (
  id: string = "",
  type: CountDownType
): CountDownAction => ({
  type: COUNT_DOWN,
  payload: { id, type }
});
