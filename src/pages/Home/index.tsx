import React from "react";

import { styled } from "@mui/system";

import { StreamerSubmissionForm } from "./views/StremerSubmissionForm/StremerSubmissionForm";
import { StreamersList } from "./views/StreamersList/StreamersList";

import { DUMMY_STREAMERS } from "./constans";

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <StreamerSubmissionForm />
      <StreamersList streamers={DUMMY_STREAMERS} />
    </HomeContainer>
  );
};

const HomeContainer = styled("section")(({ theme }) => ({
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export default Home;
