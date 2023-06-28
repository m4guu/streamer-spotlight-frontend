import React from "react";

import { styled } from "@mui/system";

import { useStreamers } from "../../hooks/query-hooks/streamer/useStreamers";

import { StatusBar } from "../../feauters/StatusBar/StatusBar";
import { StreamerSubmissionForm } from "./views/StremerSubmissionForm/StremerSubmissionForm";
import { StreamersList } from "./views/StreamersList/StreamersList";

const Home: React.FC = () => {
  const { status, error, data: streamers } = useStreamers();

  return (
    <HomeContainer>
      <StreamerSubmissionForm />

      {streamers && <StreamersList streamers={streamers} />}

      <StatusBar
        status={status}
        error={error}
        noItems={streamers?.length === 0}
      />
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
