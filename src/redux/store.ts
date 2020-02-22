import {
  createStore,
  applyMiddleware,
  Middleware,
  combineReducers
} from "redux";
import { createLogger } from "redux-logger";

import sessionReducer from "redux/session/sessionReducer";
import pomodoroReducer from "redux/pomodoro/pomodoroReducer";

import { ISessionReducerType } from "redux/session/sessionTypes";
import { IPomodoro } from "redux/pomodoro/pomodoroTypes";

export interface IState {
  pomodoros: { [key: string]: IPomodoro };
  activeSessions: ISessionReducerType;
}

export const rootReducer = combineReducers({
  pomodoros: pomodoroReducer,
  session: sessionReducer
});

const initialState: IState = {
  pomodoros: {},
  activeSessions: null
};

export const configureStore = () => {
  const middlewares: Middleware[] = [];

  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({
      collapsed: true
    });
    middlewares.push(logger);
  }

  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares)
  );
};

export const store = configureStore();
