import { SET_ACTIVE_SESSION, INCREASE_SESSION_COUNT } from "./sessionConstants";
import {
  StopPomodoroAction,
  StartPomodoroAction
} from "redux/pomodoro/pomodoroTypes";

export type SessionType = "TASK" | "SHORT_BREAK" | "LONG_BREAK";

export interface ISession {
  id: string;
  type: SessionType;
}

export interface ISessionReducerType {
  id: string | null;
  type: SessionType | null;
  sessionCount: number;
  isStopped: boolean;
}

export interface SetActiveSessionAction {
  type: typeof SET_ACTIVE_SESSION;
  payload: ISession;
}

export interface IncreaseSessionCountAction {
  type: typeof INCREASE_SESSION_COUNT;
  payload: number;
}

export type SessionReducerActionsTypes =
  | StartPomodoroAction
  | StopPomodoroAction
  | SetActiveSessionAction
  | IncreaseSessionCountAction;
