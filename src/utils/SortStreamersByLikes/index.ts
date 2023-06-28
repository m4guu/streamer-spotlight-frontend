import { Streamer } from "../../shared/interfaces";

const sortStreamersByLikes = (streamers: Streamer[]): Streamer[] =>
  streamers.sort((a, b) => b.score.likes.length - a.score.likes.length);

export default sortStreamersByLikes;
