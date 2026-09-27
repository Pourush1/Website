import { render, screen } from "@testing-library/react";
import RootLayout, { metadata } from "./layout";

jest.mock("@/components/Header", () => {
  const MockHeader = () => <div data-testid="header" />;
  MockHeader.displayName = "MockHeader";
  return MockHeader;
});

jest.mock("@/components/Footer", () => {
  const MockFooter = () => <div data-testid="footer" />;
  MockFooter.displayName = "MockFooter";
  return MockFooter;
});

describe("RootLayout", () => {
  it("exports site metadata", () => {
    expect(metadata.title).toBe("Pourush Shrestha");
    expect(metadata.description).toMatch(/senior software engineer/i);
  });

  it("renders Header, children, and Footer", () => {
    // Rendering a <html>/<body> root layout under RTL's own container
    // triggers a harmless "invalid DOM nesting" warning — expected here
    // since we're not rendering into a bare document.
    const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});

    render(
      <RootLayout>
        <p>page content</p>
      </RootLayout>
    );

    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText("page content")).toBeInTheDocument();

    consoleError.mockRestore();
  });
});
