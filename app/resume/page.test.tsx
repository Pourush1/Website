import { render, screen } from "@testing-library/react";
import Resume from "./page";

describe("Resume page", () => {
  it("renders the name and title", () => {
    render(<Resume />);

    expect(
      screen.getByRole("heading", { name: "Pourush Shrestha" })
    ).toBeInTheDocument();
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
  });

  it("links the download button to the resume PDF", () => {
    render(<Resume />);

    expect(
      screen.getByRole("link", { name: /download pdf/i })
    ).toHaveAttribute("href", "/resume.pdf");
  });

  it("renders an experience entry for each job", () => {
    render(<Resume />);

    const heading = screen.getByRole("heading", { name: "Experience" });
    const section = heading.closest("section") as HTMLElement;
    expect(section.getElementsByClassName("job")).toHaveLength(4);
  });

  it("renders a tag for each skill", () => {
    render(<Resume />);

    const heading = screen.getByRole("heading", { name: "Skills" });
    const section = heading.closest("section") as HTMLElement;
    expect(section.getElementsByClassName("skill-tag")).toHaveLength(10);
  });
});
