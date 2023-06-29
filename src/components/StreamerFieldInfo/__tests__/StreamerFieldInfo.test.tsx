import { render, screen } from "@testing-library/react";
import { StreamerFieldInfo } from "../../../components";

describe("StreamerFieldInfo Component", () => {
  it("should render the title and value correctly", () => {
    const title = "Followers";
    const value = 1000;

    render(<StreamerFieldInfo title={title} value={value} />);

    const titleElement = screen.getByText(title);
    const valueElement = screen.getByText(value.toString());

    expect(titleElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });
});
