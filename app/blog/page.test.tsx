import { render, screen } from "@testing-library/react";
import Blog from "./page";
import { getAllPosts } from "@/lib/posts";

jest.mock("@/lib/posts", () => ({
  getAllPosts: jest.fn(),
  formatDateShort: jest.fn((date: string) => `formatted-${date}`),
}));

const mockedGetAllPosts = getAllPosts as jest.Mock;

describe("Blog page", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the page title", () => {
    mockedGetAllPosts.mockReturnValue([]);

    render(<Blog />);

    expect(
      screen.getByRole("heading", { name: "Writing" })
    ).toBeInTheDocument();
  });

  it("shows an empty state message when there are no posts", () => {
    mockedGetAllPosts.mockReturnValue([]);

    render(<Blog />);

    expect(
      screen.getByText("Nothing published yet. Check back soon.")
    ).toBeInTheDocument();
  });

  it("lists all posts when posts exist", () => {
    mockedGetAllPosts.mockReturnValue([
      { slug: "a", title: "Post A", date: "2025-01-01" },
      { slug: "b", title: "Post B", date: "2025-02-01" },
      { slug: "c", title: "Post C", date: "2025-03-01" },
    ]);

    render(<Blog />);

    expect(screen.getAllByRole("listitem")).toHaveLength(3);
    expect(screen.getByRole("link", { name: "Post A" })).toHaveAttribute(
      "href",
      "/blog/a"
    );
    expect(
      screen.queryByText("Nothing published yet. Check back soon.")
    ).not.toBeInTheDocument();
  });
});
