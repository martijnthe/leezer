import React from "react";
import styled from "styled-components";
import { Action } from "./reducer";
import Stars from "./Stars";
import { ratingFromPointsAndLevel } from "./Rating";

interface Props {
  className?: string;
  points: number;
  errors: number;
  dispatch: React.Dispatch<Action>;
}

function FinishPage({ dispatch, points, errors, className }: Props) {
  return (
    <div className={className}>
      <h1>klaar!</h1>
      <Stars count={ratingFromPointsAndLevel(points, 3 /* TODO */)} />
      <div className="points">{points} punten</div>
      <div className="errors">{errors} fout</div>
      <button onClick={() => dispatch({ type: "restart" })}>
        nog een keer
      </button>
    </div>
  );
}

export default styled(FinishPage)`
  font-size: 2em;

  h1 {
    color: purple;
  }

  .points {
    margin-top: 10px;
    color: gold;
  }

  .errors {
    color: pink;
    font-size: 50%;
    margin: 20px 0;
  }

  button {
    width: 80%;
    color: white;
    font-size: 1em;
    border-radius: 10px;
    padding: 20px 40px;
    margin: 20px 0;
    background-color: green;
  }
`;
