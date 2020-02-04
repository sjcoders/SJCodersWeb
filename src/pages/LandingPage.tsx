import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import LandingCover from "../components/landingcover/LandingCover";
import CoverCards from "../components/CoverCards";

const Page = styled("div")`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export default class LandingPage extends React.Component {
  render() {
    return (
      <>
        <Page>
          <Navbar />
          <LandingCover />
          <CoverCards />
        </Page>
      </>
    );
  }
}
