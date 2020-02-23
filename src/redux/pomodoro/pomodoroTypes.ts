import {
  CREATE_POMODORO,
  START_POMODORO,
  STOP_POMODORO,
  COUNT_DOWN,
  COMPLETE_POMODORO
} from "./pomodoroConstants";

export interface IPomodoro {
  id: string;
  label: string;
  taskDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  isComplete: boolean;
}

export type IPomodoroReducerType = { [key: string]: IPomodoro };

export interface CreatePomodoroAction {
  type: typeof CREATE_POMODORO;
  payload: IPomodoro;
}

export interface StartPomodoroAction {
  type: typeof START_POMODORO;
  payload: { id: string };
}

export interface StopPomodoroAction {
  type: typeof STOP_POMODORO;
  payload: { id: string };
}

export type CountDownType =
  | "taskDuration"
  | "shortBreakDuration"
  | "longBreakDuration";

export interface CountDownAction {
  type: typeof COUNT_DOWN;
  payload: {
    id: string;
    type: CountDownType;
  };
}

export interface CompletePomodoroAction {
  type: typeof COMPLETE_POMODORO;
  payload: { id: string };
}

export type PomodoroReducerActionsTypes =
  | CreatePomodoroAction
  | StartPomodoroAction
  | StopPomodoroAction
  | CountDownAction
  | CompletePomodoroAction;
