import React, { useReducer } from "react";
import "./App.css";
import styled from "styled-components";
import { INITIAL_STATE } from "./GameState";
import reducer from "./reducer";
import { useInterval } from "react-use";
import StartPage from "./StartPage";
import PlayPage from "./PlayPage";
import FinishPage from "./FinishPage";

const Container = styled.div`
  text-align: center;
  min-height: 70vh;
  padding: 30px;
`;

const INTERVAL_MILLIS = 100;

export default function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useInterval(
    () => dispatch({ type: "tick", intervalMillis: INTERVAL_MILLIS }),
    state.phase === "play" ? INTERVAL_MILLIS : null
  );
  const timeProgressPercent =
    100 - (state.timeMillis / state.totalTimeMillis) * 100;

  return (
    <Container>
      {state.phase === "start" && <StartPage dispatch={dispatch} />}
      {state.phase === "play" && (
        <PlayPage
          {...state}
          dispatch={dispatch}
          timeProgressPercent={timeProgressPercent}
        />
      )}
      {state.phase === "finish" && (
        <FinishPage {...state} dispatch={dispatch} />
      )}
    </Container>
  );
}
