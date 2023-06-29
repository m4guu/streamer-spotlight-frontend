import { render, screen } from "../../../config/tests/custom-render";

import { SubmitButton } from "../../../components";
import { mockLabel } from "./constans";

describe("SubmitButton Component", () => {
  it("should render the button label", () => {
    render(<SubmitButton label={mockLabel} loading={false} />);

    const buttonElement = screen.getByText(mockLabel);

    expect(buttonElement).toBeInTheDocument();
  });

  it("should render a loading state when loading prop is true", () => {
    render(<SubmitButton label={mockLabel} loading={true} />);

    const loadingElement = screen.getByRole("progressbar");

    expect(loadingElement).toBeInTheDocument();
  });
});
