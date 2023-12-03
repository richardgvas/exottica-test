import { RenderResult, render } from "@testing-library/react";
import App from "./App";

describe("when it renders", () => {
  let AppComponent: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    AppComponent = render(<App />);
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
