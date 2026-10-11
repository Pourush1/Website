import { render, screen, within } from "@testing-library/react";
import Resume from "./page";

describe("Resume page", () => {
  it("renders the name and title", () => {
    render(<Resume />);

    expect(
      screen.getByRole("heading", { name: "Pourush Shrestha" })
    ).toBeInTheDocument();
    expect(screen.getByText(/Senior Frontend Engineer ·/)).toBeInTheDocument();
  });

  it("links the download button to a versioned resume PDF", () => {
    render(<Resume />);

    const link = screen.getByRole("link", { name: /download pdf/i });
    expect(link.getAttribute("href")).toMatch(/^\/resume\.pdf\?v=[0-9a-f]{8}$/);
    expect(link).toHaveAttribute("download", "Pourush-Shrestha-Resume.pdf");
  });

  it("links contact details without a phone number", () => {
    render(<Resume />);

    expect(screen.getByRole("link", { name: "Email" })).toHaveAttribute(
      "href",
      "mailto:pourushshrestha29@gmail.com"
    );
    expect(screen.queryByText(/595-5749/)).not.toBeInTheDocument();
  });

  it("renders an experience entry for each job", () => {
    render(<Resume />);

    const heading = screen.getByRole("heading", { name: "Experience" });
    const section = heading.closest("section") as HTMLElement;
    for (const company of [
      "G2O · Client: Gap Inc.",
      "G2O · Client: Abercrombie & Fitch",
      "U-Haul Inc.",
      "Omviser LLC · Axxess Inc.",
    ]) {
      expect(within(section).getByText(company)).toBeInTheDocument();
    }
  });

  it("renders each skill group", () => {
    render(<Resume />);

    const heading = screen.getByRole("heading", { name: "Skills" });
    const section = heading.closest("section") as HTMLElement;
    for (const group of [
      "Languages",
      "Frameworks & Libraries",
      "Testing & Tooling",
      "AI-Assisted Development",
    ]) {
      expect(
        within(section).getByRole("heading", { name: group })
      ).toBeInTheDocument();
    }
  });

  it("renders education", () => {
    render(<Resume />);

    expect(screen.getByText("M.Sc. Software Engineering")).toBeInTheDocument();
  });
});
