import { CREATE_POMODORO } from "./pomodoroConstants";
import { IPomodoro } from "./pomodoroTypes";

import { CreatePomodoroAction } from "./pomodoroTypes";

export const createPomodoro = (payload: IPomodoro): CreatePomodoroAction => ({
  type: CREATE_POMODORO,
  payload
});
