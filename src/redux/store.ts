import {
  createStore,
  applyMiddleware,
  Middleware,
  combineReducers,
  compose
} from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import rootSaga from "redux/rootSaga";

// Reducers
import sessionReducer, {
  initialState as sessionReducerInitialState
} from "redux/session/sessionReducer";
import pomodoroReducer, {
  initialState as pomodoroReducerInitialState
} from "redux/pomodoro/pomodoroReducer";

import { ISessionReducerType } from "redux/session/sessionTypes";
import { IPomodoro } from "redux/pomodoro/pomodoroTypes";

export interface IState {
  pomodoros: { [key: string]: IPomodoro };
  session: ISessionReducerType;
}

export const rootReducer = combineReducers({
  pomodoros: pomodoroReducer,
  session: sessionReducer
});

const initialState: IState = {
  pomodoros: pomodoroReducerInitialState,
  session: sessionReducerInitialState
};

export const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  if (process.env.NODE_ENV === "development") {
    const logger = createLogger({
      collapsed: true
    });
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export const store = configureStore();
