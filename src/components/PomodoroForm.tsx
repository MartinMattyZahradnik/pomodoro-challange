import React, { useState } from "react";
import styled from "styled-components";
import { getUnixTime } from "date-fns";
import { useDispatch } from "react-redux";
import uuid from "uuid/v4";

// Components
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { TimePicker } from "@material-ui/pickers";

// Actions
import { createPomodoro } from "redux/pomodoro/pomodoroActions";

// Constants
import {
  TIME_FORMAT,
  DURATION_TYPE,
  TASK_DEFAULT_DURATION,
  SHORT_BREAK_DEFAULT_DURATION,
  LONG_BREAK_DEFAULT_DURATION
} from "constants/AppConstants";

const StyledPomodoroForm = styled.form`
  width: ${({ theme }) => theme.breakpoints.md};
`;

const StyledPickerInputWrapper = styled.div`
  flex-basis: 19%;
  margin-right: 3%;
`;

const StyledLabelWrapper = styled.div`
  flex-basis: 25%;
  margin-right: 3%;
`;

const StyledButton = styled(Button)`
  flex-basis: 5%;
`;

const StyledFormHeading = styled(Typography)`
  margin-bottom: 4.5rem;
`;

const PomodoroForm = () => {
  const dispatch = useDispatch();
  const [label, setLabel] = useState("");
  const [taskDuration, setTaskDuration] = useState(TASK_DEFAULT_DURATION);
  const [shortBreakDuration, setShortBreakDuration] = useState(
    SHORT_BREAK_DEFAULT_DURATION
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    LONG_BREAK_DEFAULT_DURATION
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(event.target.value);
  };

  const setDuration = (durationType: string = DURATION_TYPE.TASK) => (
    dateTime: Date | null
  ): void => {
    if (dateTime) {
      switch (durationType) {
        case DURATION_TYPE.TASK:
          setTaskDuration(getUnixTime(dateTime) * 1000);
          return;
        case DURATION_TYPE.SHORT_BREAK:
          setShortBreakDuration(getUnixTime(dateTime) * 1000);
          return;
        case DURATION_TYPE.LONG_BREAK:
          setLongBreakDuration(getUnixTime(dateTime) * 1000);
          return;
      }
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(
      createPomodoro({
        id: uuid(),
        label,
        taskDuration,
        shortBreakDuration,
        longBreakDuration
      })
    );
  };

  return (
    <StyledPomodoroForm onSubmit={onSubmit}>
      <StyledFormHeading variant="h3">Create new Pomodoro</StyledFormHeading>

      <Grid container direction="row">
        <StyledLabelWrapper>
          <TextField
            id="label"
            label="Type pomodoro label"
            value={label}
            onChange={handleChange}
            variant="filled"
          />
        </StyledLabelWrapper>

        <StyledPickerInputWrapper>
          <TimePicker
            ampm={false}
            openTo="minutes"
            views={["minutes", "seconds"]}
            format={TIME_FORMAT}
            label="Task duration"
            value={new Date(taskDuration)}
            onChange={setDuration(DURATION_TYPE.TASK)}
          />
        </StyledPickerInputWrapper>

        <StyledPickerInputWrapper>
          <TimePicker
            ampm={false}
            openTo="minutes"
            views={["minutes", "seconds"]}
            format={TIME_FORMAT}
            label="Short break duration"
            value={new Date(shortBreakDuration)}
            onChange={setDuration(DURATION_TYPE.SHORT_BREAK)}
          />
        </StyledPickerInputWrapper>

        <StyledPickerInputWrapper>
          <TimePicker
            ampm={false}
            openTo="minutes"
            views={["minutes", "seconds"]}
            format={TIME_FORMAT}
            label="Long break duration"
            value={new Date(longBreakDuration)}
            onChange={setDuration(DURATION_TYPE.LONG_BREAK)}
          />
        </StyledPickerInputWrapper>

        <StyledButton variant="contained" color="secondary" type="submit">
          Create
        </StyledButton>
      </Grid>
    </StyledPomodoroForm>
  );
};

export default PomodoroForm;
