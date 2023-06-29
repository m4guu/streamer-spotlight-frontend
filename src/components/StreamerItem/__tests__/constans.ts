import { StreamingPlatforms } from "../../../shared/enums";
import { Streamer } from "../../../shared/interfaces";

export const mockStreamer: Streamer = {
  id: "1",
  name: "Streamer 1",
  platform: StreamingPlatforms.TIK_TOK,
  description:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, et!",
  score: {
    likes: [
      { id: "like-id-1", userId: "user-id-1" },
      { id: "like-id-2", userId: "user-id-2" },
      { id: "like-id-3", userId: "user-id-3" },
    ],
    dislikes: [
      { id: "dislike-id-1", userId: "user-id-4" },
      { id: "dislike-id-2", userId: "user-id-5" },
    ],
  },
};
