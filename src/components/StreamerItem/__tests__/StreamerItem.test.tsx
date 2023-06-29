import { render, screen } from "../../../config/tests/custom-render";

import { StreamerItem } from "../../../components";
import { Streamer } from "../../../shared/interfaces";
import { StreamingPlatforms, TestId } from "../../../shared/enums";

describe("StreamerItem Component", () => {
  const mockStreamer: Streamer = {
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

  it("should render the streamer name", () => {
    render(<StreamerItem streamer={mockStreamer} itemIndex={0} />);

    const streamerNameElement = screen.getByText(mockStreamer.name);

    expect(streamerNameElement).toBeInTheDocument();
  });

  it("should render the correct number of likes and dislikes", () => {
    render(<StreamerItem streamer={mockStreamer} itemIndex={0} />);

    const likesElement = screen.getByText(mockStreamer.score.likes.length);
    const dislikesElement = screen.getByText(
      mockStreamer.score.dislikes.length
    );

    expect(likesElement).toBeInTheDocument();
    expect(dislikesElement).toBeInTheDocument();
  });

  it("should render the cup emoji for the most liked streamer", () => {
    render(<StreamerItem streamer={mockStreamer} itemIndex={0} />);

    const emojiElement = screen.getByTestId(TestId.WINNER_CUP_ICON);

    expect(emojiElement).toBeInTheDocument();
  });
});
