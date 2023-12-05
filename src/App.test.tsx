import { RenderResult } from "@testing-library/react";
import { renderWithClient } from "./utils/tests/renderWithClient";
import { QueryClient } from "@tanstack/react-query";
import App from "./App";

describe("when it renders", () => {
  const queryClient = new QueryClient();
  let AppComponent: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    AppComponent = renderWithClient(queryClient, <App />);
  });
  test("there is a sidebar in the document", () => {
    const { getByText } = AppComponent;
    expect(getByText("Exoticca")).toBeInTheDocument();
  });
  test("there is a panel in the document", () => {
    const { getByTestId } = AppComponent;
    expect(getByTestId("main-section")).toBeInTheDocument();
  });
});
