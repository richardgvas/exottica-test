import { RenderResult, render } from "@testing-library/react";
import SideBar from "./../index";

describe("when it renders", () => {
  let AppComponent: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    AppComponent = render(<SideBar />);
  });
  test("there is a sidebar in the document", () => {
    const { getByText } = AppComponent;
    expect(getByText("Exoticca")).toBeInTheDocument();
  });
  test("there is a list of four items in the sidebar", () => {
    const { container, getByTestId } = AppComponent;
    expect(getByTestId("sidebar-items")).toBeInTheDocument();
    expect(container.querySelectorAll("span").length).toBe(4);
    expect(container.querySelectorAll("svg").length).toBe(4);
  });
});
