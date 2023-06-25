import { Button } from "@mui/material";

// Like Streamer //
export const Like = () => {
  // todo: add functionality when backend will be added
  const like = () => {};
  return (
    <Button onClick={like} fullWidth color="success" variant="contained">
      like
    </Button>
  );
};
//

// Dislike Streamer //
export const Dislike = () => {
  // todo: add functionality when backend will be added
  const dislike = () => {};
  return (
    <Button onClick={dislike} fullWidth color="error" variant="contained">
      dislike
    </Button>
  );
};
//
