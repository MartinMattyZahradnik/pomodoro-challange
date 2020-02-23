import { createSelector } from "reselect";
import { IState } from "redux/store";
import { ISessionReducerType } from "./sessionTypes";
import { initialState as sessionReducerInitialState } from "./sessionReducer";
const getSession = (state: IState) => state.session;

const selectSession = createSelector(
  [getSession],
  (session: ISessionReducerType = sessionReducerInitialState) => session
);

export const selectActiveSessionType = createSelector(
  [selectSession],
  (session = sessionReducerInitialState) => session.type
);

export const selectActiveSessionId = createSelector(
  [selectSession],
  (session = sessionReducerInitialState) => session.id
);

export const selectSessionCount = createSelector(
  [selectSession],
  (session = sessionReducerInitialState) => session.sessionCount
);

export const selectIsSessionStopped = createSelector(
  [selectSession],
  (session): boolean => session.isStopped
);
