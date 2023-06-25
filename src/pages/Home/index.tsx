import React from "react";

import { styled } from "@mui/system";

import { StreamerSubmissionForm } from "./views/StremerSubmissionForm";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <StreamerSubmissionForm />
    </HomeContainer>
  );
};

const HomeContainer = styled("section")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  justifyContent: "center",
}));

export default Home;
