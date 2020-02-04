import React from "react";
import styled from "styled-components";

import LandingHead from "./LandingHead";

const Cover = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(140deg, #9795ef, #f9c5d1);
  margin-bottom: -27vh;
`;

export default class LandingCover extends React.Component {
  render() {
    return (
      <>
        <Cover>
          <LandingHead></LandingHead>
        </Cover>
      </>
    );
  }
}
