import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import LandingCover from "../components/landingcover/LandingCover";

const Page = styled("div")`
  display: flex;
  width: 100%;
`;

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Page>
          <Navbar />
          <LandingCover />
        </Page>
      </>
    );
  }
}
