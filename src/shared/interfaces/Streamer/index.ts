import { StreamingPlatforms } from "../../enums";

interface Streamer {
  id: string;
  name: string;
  platform: StreamingPlatforms;
  description: string;
  score: {
    likes: { id: string; userId: string }[];
    dislikes: { id: string; userId: string }[];
  };
}

export default Streamer;
