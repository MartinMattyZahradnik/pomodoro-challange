import React, { Component } from "react";
import styled from "styled-components";

// Components
import PomodoroForm from "components/PomodoroForm";
import PomodoroList from "components/PomodoroList";
import Timer from "components/Timer";

const StyledApplicationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 5%;
`;

const StyledApplication = styled.div`
  max-width: ${({ theme }) => theme.breakpoints.md};
`;

class App extends Component {
  render() {
    return (
      <StyledApplicationWrapper>
        <StyledApplication>
          <PomodoroForm />
          <Timer />
          <PomodoroList />
        </StyledApplication>
      </StyledApplicationWrapper>
    );
  }
}

export default App;
