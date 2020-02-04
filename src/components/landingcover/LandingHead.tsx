import React from "react";
import styled from "styled-components";
import { Button } from "reactstrap";

const Head = styled("div")`
  display: flex;
  flex-direction: column;
  color: white;
  font-family: "Open Sans", sans-serif;
  width: 35%;
  margin-left: 16vw;
  margin-top: 26vh;
  margin-bottom: 40vh;
`;

const Title = styled("p")`
  font-size: 2.2vw;
  font-weight: bold;
`;

const Desc = styled("p")`
  font-size: 1.35vw;
  letter-spacing: 0.08em;
`;

const Enroll = styled(Button)`
  width: 30%;
`;

export default class LandingHead extends React.Component {
  render() {
    return (
      <>
        <Head>
          <Title>A complete Coding Course</Title>
          <Desc>
            Advance your programming skills through hands-on projects,
            university level curriculum, and experienced instructors.
          </Desc>
          <Enroll type="button" color="primary">
            Enroll
          </Enroll>
        </Head>
      </>
    );
  }
}
