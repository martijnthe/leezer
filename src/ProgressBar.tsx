import React from "react";
import styled from "styled-components";

interface Props {
  className?: string;
  progressPercent: number;
}

function ProgressBar({ className, progressPercent }: Props) {
  return (
    <div className={className}>
      <div
        className="fill"
        style={{ transform: `scale(${progressPercent / 100}, 1)` }}
      />
    </div>
  );
}

export default styled(ProgressBar)`
  height: 5px;
  border: solid 1px grey;
  border-radius: 5px;
  background-color: white;

  & div {
    transform-origin: left;
    height: 5px;
    background-color: grey;
  }
`;
