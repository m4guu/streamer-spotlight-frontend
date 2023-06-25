import { StreamingPlatforms } from "../../shared/enums";
import { Streamer } from "../../shared/interfaces";

export const DUMMY_STREAMERS: Streamer[] = [
  {
    id: "1",
    name: "xQc",
    platform: StreamingPlatforms.TWITCH,
    description: "asdsaaaaaaaaaaaaaaaaaaaaaaaa",
    score: {
      likes: [
        { id: "like_1", userId: "user1" },
        { id: "like_2", userId: "user3" },
        { id: "like_3", userId: "user2" },
      ],
      dislikes: [{ id: "dislike_1", userId: "user2" }],
    },
  },
  {
    id: "2",
    name: "xayoo",
    platform: StreamingPlatforms.TWITCH,
    description: "asdsaaaaaaaaaaaaaaaaaaaaaaaa",
    score: {
      likes: [],
      dislikes: [{ id: "dislike_1", userId: "user2" }],
    },
  },
];
