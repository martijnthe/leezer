import React from "react";
import styled from "styled-components";
import ProgressBar from "./ProgressBar";
import Score from "./Score";
import { Action } from "./reducer";

interface PromptProps {
  className?: string;
  word: string;
  points: number;
  errors: number;
  timeProgressPercent: number;
  dispatch: React.Dispatch<Action>;
}

function PlayPage({
  word,
  className,
  points,
  errors,
  timeProgressPercent,
  dispatch,
}: PromptProps) {
  return (
    <div className={className}>
      <div className="controls">
        <button className="pass" onClick={() => dispatch({ type: "pass" })}>
          goed
        </button>
        <button className="fail" onClick={() => dispatch({ type: "fail" })}>
          fout
        </button>
      </div>
      <div className="word">{word}</div>
      <Score points={points} errors={errors}>
        <ProgressBar progressPercent={timeProgressPercent} />
      </Score>
    </div>
  );
}

export default styled(PlayPage)`
  font-size: 1.6em;

  .controls {
    margin-bottom: 30vh;
  }

  .word {
    font-size: 2em;
    margin-bottom: 14vh;
  }

  button {
    color: white;
    font-size: 1em;
    transform: rotate(180deg);
    border-radius: 10px;
    padding: 10px 20px;
    margin: 20px;
  }

  button.pass {
    background-color: green;
  }

  button.fail {
    background-color: red;
  }
`;
