import { LoadingButton } from "@mui/lab";

import { useVoteStreamerMutation } from "../../../../../hooks/query-hooks/streamer/useVoteStreamerMutation";
import { Vote } from "../../../../../shared/interfaces";

// Like Streamer //
export const Like: React.FC<{ streamerId: string }> = ({ streamerId }) => {
  const {
    isLoading,
    error,
    status,
    mutateAsync: makeVote,
  } = useVoteStreamerMutation(streamerId);

  const like = async () => {
    const vote: Vote = {
      userId: "?",
      streamerId,
      isLike: true,
    };
    makeVote(vote);
  };
  return (
    <LoadingButton
      loading={isLoading}
      onClick={like}
      fullWidth
      color="success"
      variant="contained"
    >
      like
    </LoadingButton>
  );
};
//

// Dislike Streamer //
export const Dislike: React.FC<{ streamerId: string }> = ({ streamerId }) => {
  const {
    isLoading,
    error,
    status,
    mutateAsync: makeVote,
  } = useVoteStreamerMutation(streamerId);
  const dislike = async () => {
    const vote: Vote = {
      userId: "?",
      streamerId,
      isLike: false,
    };
    makeVote(vote);
  };
  return (
    <LoadingButton
      loading={isLoading}
      onClick={dislike}
      fullWidth
      color="error"
      variant="contained"
    >
      dislike
    </LoadingButton>
  );
};
//
