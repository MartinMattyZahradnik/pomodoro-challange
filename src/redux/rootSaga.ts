import { spawn } from "redux-saga/effects";

import pomodoroSaga from "redux/pomodoro/pomodoroSagas";

export default function* rootSaga() {
  yield spawn(pomodoroSaga);
}
