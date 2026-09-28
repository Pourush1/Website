import { render, screen } from "@testing-library/react";
import PostPage, { generateMetadata, generateStaticParams } from "./page";
import { getAllPosts, getPost } from "@/lib/posts";
import { notFound } from "next/navigation";

jest.mock("@/lib/posts", () => ({
  getAllPosts: jest.fn(),
  getPost: jest.fn(),
  formatDate: jest.fn((date: string) => `formatted-${date}`),
}));

jest.mock("next/navigation", () => ({
  notFound: jest.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
  }),
}));

jest.mock("next-mdx-remote/rsc", () => ({
  MDXRemote: ({ source }: { source: string }) => <div data-testid="mdx">{source}</div>,
}));

const mockedGetAllPosts = getAllPosts as jest.Mock;
const mockedGetPost = getPost as jest.Mock;
const mockedNotFound = notFound as unknown as jest.Mock;

describe("generateStaticParams", () => {
  it("maps posts to slug params", async () => {
    mockedGetAllPosts.mockReturnValue([{ slug: "a" }, { slug: "b" }]);

    const params = await generateStaticParams();

    expect(params).toEqual([{ slug: "a" }, { slug: "b" }]);
  });
});

describe("generateMetadata", () => {
  afterEach(() => jest.clearAllMocks());

  it("returns empty metadata when the post does not exist", async () => {
    mockedGetPost.mockReturnValue(null);

    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: "missing" }),
    });

    expect(metadata).toEqual({});
  });

  it("returns title and description metadata for an existing post", async () => {
    mockedGetPost.mockReturnValue({
      slug: "my-post",
      title: "My Post",
      description: "A description",
      date: "2025-01-01",
      content: "body",
    });

    const metadata = await generateMetadata({
      params: Promise.resolve({ slug: "my-post" }),
    });

    expect(metadata).toEqual({
      title: "My Post — Pourush Shrestha",
      description: "A description",
    });
  });
});

describe("PostPage", () => {
  afterEach(() => jest.clearAllMocks());

  it("calls notFound when the post does not exist", async () => {
    mockedGetPost.mockReturnValue(null);

    await expect(
      PostPage({ params: Promise.resolve({ slug: "missing" }) })
    ).rejects.toThrow("NEXT_NOT_FOUND");
    expect(mockedNotFound).toHaveBeenCalled();
  });

  it("renders the post title, meta, and content", async () => {
    mockedGetPost.mockReturnValue({
      slug: "my-post",
      title: "My Post",
      description: "A description",
      date: "2025-01-01",
      readingTime: "3 min read",
      content: "Post body content",
    });

    const jsx = await PostPage({
      params: Promise.resolve({ slug: "my-post" }),
    });
    render(jsx);

    expect(
      screen.getByRole("heading", { name: "My Post" })
    ).toBeInTheDocument();
    expect(screen.getByText("3 min read")).toBeInTheDocument();
    expect(screen.getByText("formatted-2025-01-01")).toBeInTheDocument();
    expect(screen.getByTestId("mdx")).toHaveTextContent("Post body content");
    expect(screen.getByRole("link", { name: /all posts/i })).toHaveAttribute(
      "href",
      "/blog"
    );
  });
});
