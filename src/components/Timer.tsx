import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// Components
import { Grid } from "@material-ui/core";

// Constants
import { DURATION_TYPE } from "constants/AppConstants";

// Selectors
import {
  selectActiveSessionType,
  selectActiveSessionId
} from "redux/session/sessionSelectors";
import { selectPomodoroById } from "redux/pomodoro/pomodoroSelectors";

// Types
import { IState } from "redux/store";
import { SessionType } from "redux/session/sessionTypes";
import { IPomodoro } from "redux/pomodoro/pomodoroTypes";

// Utils
import { millisecondsToMinutesAndSeconds } from "utils/time";

const StyledTimer = styled(Grid)`
  padding: 5rem 0;
  font-size: 3rem;
`;

const getTimerText = (activeTaskType: SessionType, pomodoro: IPomodoro) => {
  switch (activeTaskType) {
    case DURATION_TYPE.TASK:
      return `${pomodoro.label} - ${millisecondsToMinutesAndSeconds(
        pomodoro.taskDuration
      )}`;

    case DURATION_TYPE.SHORT_BREAK:
      return `${
        pomodoro.label
      } - Short break: ${millisecondsToMinutesAndSeconds(
        pomodoro.shortBreakDuration
      )}`;

    case DURATION_TYPE.LONG_BREAK:
      return `${pomodoro.label} - Long break: ${millisecondsToMinutesAndSeconds(
        pomodoro.longBreakDuration
      )}`;

    default:
      return "";
  }
};

const Timer = () => {
  const activeTaskType = useSelector(selectActiveSessionType);
  const activePomodoroId = useSelector(selectActiveSessionId);
  const pomodoro = useSelector((state: IState) =>
    selectPomodoroById(state, activePomodoroId || "")
  );

  if (!pomodoro || !activeTaskType) {
    return null;
  }

  const timerText = getTimerText(activeTaskType, pomodoro);

  return (
    <StyledTimer container item justify="center">
      {timerText}
    </StyledTimer>
  );
};

export default Timer;
