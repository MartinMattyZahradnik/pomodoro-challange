import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

// Components
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Button
} from "@material-ui/core";

// Actions
import { startPomodoro, stopPomodoro } from "redux/pomodoro/pomodoroActions";

// Selector
import { selectPomodoroList } from "redux/pomodoro/pomodoroSelectors";
import {
  selectActiveSessionId,
  selectIsSessionStopped
} from "redux/session/sessionSelectors";

// Utils
import { millisecondsToMinutesAndSeconds } from "utils/time";

const StyledNoPomodoroMsg = styled(Paper)`
  padding: 3.5rem 5rem;
  text-align: center;
`;

const StyledStartButton = styled(Button)`
  margin-right: 1.5rem;
`;

const PomodoroList = () => {
  const dispatch = useDispatch();
  const pomodoros = useSelector(selectPomodoroList);
  const activePomodoroId = useSelector(selectActiveSessionId);
  const isSessionStopped = useSelector(selectIsSessionStopped);

  if (pomodoros.length === 0) {
    return (
      <StyledNoPomodoroMsg>
        You have no pomodoros. Let's start with creating new one. YOU CAN DO
        IT!!!
      </StyledNoPomodoroMsg>
    );
  }

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Label</TableCell>
              <TableCell>Task duration</TableCell>
              <TableCell>Short break duration</TableCell>
              <TableCell>Long break duration</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {pomodoros.map(
              ({
                id,
                label,
                taskDuration,
                shortBreakDuration,
                longBreakDuration,
                isComplete
              }) => (
                <TableRow hover tabIndex={-1} key={id}>
                  <TableCell>{label}</TableCell>
                  <TableCell>
                    {millisecondsToMinutesAndSeconds(taskDuration)}
                  </TableCell>
                  <TableCell>
                    {millisecondsToMinutesAndSeconds(shortBreakDuration)}
                  </TableCell>
                  <TableCell>
                    {millisecondsToMinutesAndSeconds(longBreakDuration)}
                  </TableCell>
                  <TableCell>
                    {activePomodoroId !== id && (
                      <StyledStartButton
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(startPomodoro(id))}
                        disabled={isComplete}
                      >
                        Start
                      </StyledStartButton>
                    )}

                    {activePomodoroId === id && isSessionStopped && (
                      <StyledStartButton
                        variant="contained"
                        color="primary"
                        onClick={() => dispatch(startPomodoro(id))}
                      >
                        Continue
                      </StyledStartButton>
                    )}

                    {activePomodoroId === id && !isSessionStopped && (
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => dispatch(stopPomodoro(id))}
                        disabled={isComplete}
                      >
                        Stop
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default PomodoroList;
