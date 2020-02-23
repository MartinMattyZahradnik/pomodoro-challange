import { createSelector } from "reselect";
import { IPomodoro } from "./pomodoroTypes";
import { IState } from "redux/store";

const getPomodoro = (state: IState) => state.pomodoros;

const selectPomodoros = createSelector(
  [getPomodoro],
  (pomodoros: { [key: string]: IPomodoro } = {}) => pomodoros
);

export const selectPomodoroList = createSelector(
  [selectPomodoros],
  (pomodoros = {}) => {
    return Object.values(pomodoros);
  }
);

export const selectPomodoroById = createSelector(
  [selectPomodoros, (state: IState, id: string) => id],
  (pomodoros = {}, id = "") => pomodoros[id]
);

export const selectPomodoroLabel = createSelector(
  [selectPomodoroById],
  pomodoro => (pomodoro ? pomodoro.label : "")
);
