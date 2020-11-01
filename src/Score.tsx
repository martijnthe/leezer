import React, { ReactNode } from "react";
import styled from "styled-components";
import { ratingFromPointsAndLevel } from "./Rating";
import Stars from "./Stars";

interface Props {
  points: number;
  errors: number;
  className?: string;
  children?: ReactNode;
}

function Score({ points, className, errors, children }: Props) {
  return (
    <div className={className}>
      <Stars count={ratingFromPointsAndLevel(points, 3 /* TODO */)} />
      <div className="points">
        {points} punten<span>{errors} fout</span>
      </div>
      {children}
    </div>
  );
}

export default styled(Score)`
  min-width: 10vw;
  // background-color: #675caf;
  border-radius: 10px;
  color: green;
  font-weight: bold;
  padding: 15px;

  & div.points {
    margin-bottom: 15px;
  }

  & span {
    margin-left: 20px;
    color: red;
    font-size: 50%;
  }
`;
