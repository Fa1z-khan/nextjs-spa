import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Home from "../pages/index";

test("Page", async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <Home />
    </QueryClientProvider>
  );
  expect(screen.getByText("Loading...")).toBeDefined();
});
