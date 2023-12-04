import {
  RenderResult,
  getByDisplayValue,
  screen,
  waitFor,
} from "@testing-library/react";
import { QueryClient } from "@tanstack/react-query";
import MainSection from "..";
import { renderWithClient } from "../../../utils/tests/renderWithClient";

describe("when it renders", () => {
  const queryClient = new QueryClient();

  let MainSectionComponent: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    MainSectionComponent = renderWithClient(queryClient, <MainSection />);
  });
  test("The main section should be rendered", () => {
    const { getByTestId } = MainSectionComponent;
    expect(getByTestId("main-section")).toBeInTheDocument();
  });
  test("The title of the landing and the loading should be rendered", () => {
    const { getByTestId, getByText } = MainSectionComponent;
    expect(getByTestId("landing-title")).toBeInTheDocument();
    expect(getByText("is loading ...")).toBeInTheDocument();
  });
  test("The title of the landing and the table should be rendered", async () => {
    const { getByTestId } = MainSectionComponent;
    expect(getByTestId("landing-title")).toBeInTheDocument();
    await waitFor(() => {
      expect(getByTestId("data-table")).toBeInTheDocument();
    });
  });
});
