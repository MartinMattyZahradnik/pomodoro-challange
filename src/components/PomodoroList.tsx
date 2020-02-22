import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

// Components
import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@material-ui/core";

// Selector
import { selectPomodoroList } from "redux/pomodoro/pomodoroSelectors";

// Utils
import { millisecondsToMinutesAndSeconds } from "utils/time";

const StyledNoPomodoroMsg = styled(Paper)`
  padding: 3.5rem 5rem;
  text-align: center;
`;

const PomodoroList = () => {
  const pomodoros = useSelector(selectPomodoroList);

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
            </TableRow>
          </TableHead>
          <TableBody>
            {pomodoros.map(
              ({
                id,
                label,
                taskDuration,
                shortBreakDuration,
                longBreakDuration
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
