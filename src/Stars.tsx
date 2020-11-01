import styled from "styled-components";
import { range } from "lodash";
import star from "./star.svg";
import React from "react";

interface Props {
  count: number;
  className?: string;
}

function Stars({ count, className }: Props) {
  return (
    <div className={className}>
      {range(count).map(() => (
        <img src={star} alt="star" />
      ))}
    </div>
  );
}

export default styled(Stars)`
  height: 50px;

  img {
    height: 50px;
  }
`;
