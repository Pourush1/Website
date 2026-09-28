import fs from "fs";
import { getAllPosts, getPost, formatDate, formatDateShort } from "./posts";

jest.mock("fs");

const mockedFs = fs as jest.Mocked<typeof fs>;

describe("getAllPosts", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns an empty array when the content directory does not exist", () => {
    mockedFs.existsSync.mockReturnValue(false);

    expect(getAllPosts()).toEqual([]);
  });

  it("reads, parses, and sorts posts by date descending", () => {
    mockedFs.existsSync.mockReturnValue(true);
    mockedFs.readdirSync.mockReturnValue([
      "older-post.mdx",
      "newer-post.mdx",
      "not-a-post.txt",
    ] as unknown as ReturnType<typeof fs.readdirSync>);

    mockedFs.readFileSync.mockImplementation((filePath) => {
      const file = String(filePath);
      if (file.includes("older-post")) {
        return `---
title: "Older Post"
date: "2024-01-01"
description: "An older post"
---
Some older content with a handful of words in it.`;
      }
      if (file.includes("newer-post")) {
        return `---
title: "Newer Post"
date: "2025-06-01"
description: "A newer post"
---
Some newer content.`;
      }
      throw new Error(`Unexpected file read: ${file}`);
    });

    const posts = getAllPosts();

    expect(posts).toHaveLength(2);
    expect(posts[0].slug).toBe("newer-post");
    expect(posts[1].slug).toBe("older-post");
    expect(posts[0].title).toBe("Newer Post");
    expect(posts[0].readingTime).toBe("1 min read");
  });

  it("filters out non-mdx files", () => {
    mockedFs.existsSync.mockReturnValue(true);
    mockedFs.readdirSync.mockReturnValue([
      "post.mdx",
      "README.md",
      "notes.txt",
    ] as unknown as ReturnType<typeof fs.readdirSync>);
    mockedFs.readFileSync.mockReturnValue(`---
title: "Post"
date: "2024-01-01"
---
Content.`);

    const posts = getAllPosts();

    expect(posts).toHaveLength(1);
    expect(posts[0].slug).toBe("post");
  });

  it("falls back to slug and empty strings when frontmatter fields are missing", () => {
    mockedFs.existsSync.mockReturnValue(true);
    mockedFs.readdirSync.mockReturnValue([
      "untitled.mdx",
    ] as unknown as ReturnType<typeof fs.readdirSync>);
    mockedFs.readFileSync.mockReturnValue(`---
---
No frontmatter fields here.`);

    const posts = getAllPosts();

    expect(posts[0].title).toBe("untitled");
    expect(posts[0].date).toBe("");
    expect(posts[0].description).toBe("");
  });
});

describe("getPost", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("returns null when the post file does not exist", () => {
    mockedFs.existsSync.mockReturnValue(false);

    expect(getPost("missing-post")).toBeNull();
  });

  it("returns the parsed post with content when the file exists", () => {
    mockedFs.existsSync.mockReturnValue(true);
    mockedFs.readFileSync.mockReturnValue(`---
title: "My Post"
date: "2025-01-01"
description: "A description"
---
The body content of the post.`);

    const post = getPost("my-post");

    expect(post).not.toBeNull();
    expect(post?.slug).toBe("my-post");
    expect(post?.title).toBe("My Post");
    expect(post?.date).toBe("2025-01-01");
    expect(post?.description).toBe("A description");
    expect(post?.content.trim()).toBe("The body content of the post.");
    expect(post?.readingTime).toBe("1 min read");
  });

  it("computes a longer reading time for longer content", () => {
    mockedFs.existsSync.mockReturnValue(true);
    const longBody = new Array(450).fill("word").join(" ");
    mockedFs.readFileSync.mockReturnValue(`---
title: "Long Post"
date: "2025-01-01"
---
${longBody}`);

    const post = getPost("long-post");

    expect(post?.readingTime).toBe("3 min read");
  });
});

describe("formatDate", () => {
  it("formats a date string as a long-form US date", () => {
    expect(formatDate("2025-09-10")).toBe("September 10, 2025");
  });
});

describe("formatDateShort", () => {
  it("formats a date string as a short month and year", () => {
    expect(formatDateShort("2025-09-10")).toBe("Sep 2025");
  });
});
