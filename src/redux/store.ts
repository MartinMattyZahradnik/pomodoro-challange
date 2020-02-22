import {
  createStore,
  applyMiddleware,
  Middleware,
  combineReducers
} from "redux";
import { createLogger } from "redux-logger";

import sessionReducer from "redux/session/sessionReducer";
import pomodoroReducer from "redux/pomodoro/pomodoroReducer";

export const rootReducer = combineReducers({
  pomodoros: pomodoroReducer,
  session: sessionReducer
});

const initialState = {
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
