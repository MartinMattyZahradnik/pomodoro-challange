import { SET_ACTIVE_SESSION, INCREASE_SESSION_COUNT } from "./sessionConstants";
import {
  ISession,
  SetActiveSessionAction,
  IncreaseSessionCountAction
} from "./sessionTypes";

export const setActiveSession = (
  payload: ISession
): SetActiveSessionAction => ({
  type: SET_ACTIVE_SESSION,
  payload
});

export const increaseSessionCount = (
  count: number = 1
): IncreaseSessionCountAction => ({
  type: INCREASE_SESSION_COUNT,
  payload: count
});
