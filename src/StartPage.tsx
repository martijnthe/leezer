import React from "react";
import styled from "styled-components";
import { Action } from "./reducer";
import dictionaries from "./dictionaries";

interface Props {
  dispatch: React.Dispatch<Action>;
  className?: string;
}

function StartPage({ dispatch, className }: Props) {
  return (
    <div className={className}>
      {dictionaries.map((dictionary) => (
        <div>
          <button onClick={() => dispatch({ type: "start", dictionary })}>
            {dictionary.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default styled(StartPage)`
  margin: 40px 0;
  button {
    width: 80%;
    color: white;
    font-size: 2em;
    border-radius: 10px;
    padding: 20px 40px;
    margin: 20px 0;
    background-color: green;
  }
`;
