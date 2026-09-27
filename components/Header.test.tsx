import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the site name linking home", () => {
    render(<Header />);

    const siteName = screen.getByRole("link", { name: "Pourush Shrestha" });
    expect(siteName).toHaveAttribute("href", "/");
  });

  it("renders navigation links to Resume and Blog", () => {
    render(<Header />);

    expect(screen.getByRole("link", { name: "Resume" })).toHaveAttribute(
      "href",
      "/resume"
    );
    expect(screen.getByRole("link", { name: "Blog" })).toHaveAttribute(
      "href",
      "/blog"
    );
  });
});
