import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the owner name", () => {
    render(<Footer />);

    expect(screen.getByText("Pourush Shrestha")).toBeInTheDocument();
  });

  it("renders social links with correct hrefs and safe target attributes", () => {
    render(<Footer />);

    const github = screen.getByRole("link", { name: "GitHub" });
    expect(github).toHaveAttribute("href", "https://github.com/Pourush1");
    expect(github).toHaveAttribute("target", "_blank");
    expect(github).toHaveAttribute("rel", "noopener noreferrer");

    const twitter = screen.getByRole("link", { name: "Twitter" });
    expect(twitter).toHaveAttribute("href", "https://x.com/pourush29");

    const linkedin = screen.getByRole("link", { name: "LinkedIn" });
    expect(linkedin).toHaveAttribute(
      "href",
      "https://linkedin.com/in/pourush-shrestha"
    );
  });
});
