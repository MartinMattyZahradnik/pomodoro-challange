import {
  takeLatest,
  put,
  delay,
  cancel,
  take,
  fork,
  select
} from "redux-saga/effects";

import { START_POMODORO, STOP_POMODORO } from "./pomodoroConstants";

import {
  setActiveSession,
  increaseSessionCount
} from "redux/session/sessionActions";
import { countDown, completePomodoro } from "./pomodoroActions";

import { selectPomodoroById } from "./pomodoroSelectors";
import { selectSessionCount } from "redux/session/sessionSelectors";
import { IPomodoro } from "./pomodoroTypes";

function* countDownSagaTask({
  id,
  taskDuration,
  shortBreakDuration,
  longBreakDuration
}: IPomodoro) {
  try {
    // Start task count down
    for (let i = 0; i < taskDuration / 1000; i++) {
      yield put(countDown(id, "taskDuration"));
      yield delay(1000);
    }

    yield put(increaseSessionCount());
    const count = yield select(selectSessionCount);

    // Start long break count down
    if (count % 4 === 0) {
      yield put(setActiveSession({ id, type: "LONG_BREAK" }));
      for (let i = 0; i < longBreakDuration / 1000; i++) {
        yield put(countDown(id, "longBreakDuration"));
        yield delay(1000);
      }
    } else {
      // Start short break count down
      yield put(setActiveSession({ id, type: "SHORT_BREAK" }));
      for (let i = 0; i < shortBreakDuration / 1000; i++) {
        yield put(countDown(id, "shortBreakDuration"));
        yield delay(1000);
      }
    }

    yield put(completePomodoro(id));
  } catch (err) {
    console.log(err);
  }
}

function* pomodoroStartWatcher({
  payload
}: {
  type: string;
  payload: { id: string };
}) {
  yield put(setActiveSession({ id: payload.id, type: "TASK" }));
  const pomodoro = yield select(selectPomodoroById, payload.id);
  const countDownTask = yield fork(countDownSagaTask, pomodoro);

  yield take(STOP_POMODORO);
  yield cancel(countDownTask);
}

export default function* pomodoroSagas() {
  yield takeLatest(START_POMODORO, pomodoroStartWatcher);
}
