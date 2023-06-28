import { StreamingPlatforms } from "../../enums";
import Score from "../Score";

interface Streamer {
  id: string;
  name: string;
  platform: StreamingPlatforms;
  description: string;
  score: Score;
}

export default Streamer;
