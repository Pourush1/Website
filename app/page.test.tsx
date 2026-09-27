import { render, screen } from "@testing-library/react";
import Home from "./page";
import { getAllPosts } from "@/lib/posts";

jest.mock("@/lib/posts", () => ({
  getAllPosts: jest.fn(),
  formatDateShort: jest.fn((date: string) => `formatted-${date}`),
}));

const mockedGetAllPosts = getAllPosts as jest.Mock;

describe("Home page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the intro heading and social links", () => {
    mockedGetAllPosts.mockReturnValue([]);

    render(<Home />);

    expect(
      screen.getByRole("heading", {
        name: /software engineer who builds things that matter/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "GitHub ↗" })).toHaveAttribute(
      "href",
      "https://github.com/Pourush1"
    );
    expect(screen.getByRole("link", { name: "Resume →" })).toHaveAttribute(
      "href",
      "/resume"
    );
  });

  it("does not render the recent writing section when there are no posts", () => {
    mockedGetAllPosts.mockReturnValue([]);

    render(<Home />);

    expect(screen.queryByText("Recent writing")).not.toBeInTheDocument();
  });

  it("renders up to 5 recent posts when posts exist", () => {
    mockedGetAllPosts.mockReturnValue([
      { slug: "post-1", title: "Post One", date: "2025-01-01" },
      { slug: "post-2", title: "Post Two", date: "2025-02-01" },
    ]);

    render(<Home />);

    expect(screen.getByText("Recent writing")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Post One" })).toHaveAttribute(
      "href",
      "/blog/post-1"
    );
    expect(screen.getByRole("link", { name: "Post Two" })).toHaveAttribute(
      "href",
      "/blog/post-2"
    );
  });

  it("slices the post list to at most 5 posts", () => {
    const posts = Array.from({ length: 8 }).map((_, i) => ({
      slug: `post-${i}`,
      title: `Post ${i}`,
      date: "2025-01-01",
    }));
    mockedGetAllPosts.mockReturnValue(posts);

    render(<Home />);

    expect(screen.getAllByRole("listitem")).toHaveLength(5);
  });
});
