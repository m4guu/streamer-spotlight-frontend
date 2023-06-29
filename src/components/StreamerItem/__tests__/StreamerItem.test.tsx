import { render, screen } from "../../../config/tests/custom-render";

import { StreamerItem } from "../../../components";
import { TestId } from "../../../shared/enums";
import { mockStreamer } from "./constans";

describe("StreamerItem Component", () => {
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
