import { CREATE_POMODORO } from "./pomodoroConstants";

export interface IPomodoro {
  id: string;
  label: string;
  taskDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
}

export type IPomodoroReducerType = { [key: string]: IPomodoro };

export interface CreatePomodoroAction {
  type: typeof CREATE_POMODORO;
  payload: IPomodoro;
}
