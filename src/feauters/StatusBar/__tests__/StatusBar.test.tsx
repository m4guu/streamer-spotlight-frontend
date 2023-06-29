import { render, screen } from "@testing-library/react";

import { StatusBar } from "../StatusBar";
import { mockError } from "./constans";
import { Status } from "../../../shared/enums";

describe("StatusBar", () => {
  it("renders loading status", () => {
    const { container } = render(
      <StatusBar status={Status.LOADING} error={null} />
    );

    expect(screen.getByRole("progressbar")).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders error status", () => {
    render(<StatusBar status="error" error={mockError} />);

    expect(screen.getByText(mockError.message)).toBeInTheDocument();
  });

  it("renders no items message", () => {
    render(<StatusBar status={Status.SUCCESS} error={null} noItems />);

    expect(screen.getByText("No fields added yet.")).toBeInTheDocument();
  });
});
