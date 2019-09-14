import React from "react";

// STYLE
import { HomePageContainer } from "./Homepage.styles";

// COMPONENTS
import Directory from "../../components/Directory/Directory";

const Homepage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default Homepage;
