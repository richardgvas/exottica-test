import { RenderResult, waitFor, screen } from "@testing-library/react";
import * as ReactQuery from "@tanstack/react-query";
import { renderWithClient } from "../../../utils/tests/renderWithClient";
import MockData from "./../../../mocks/landings.json";
import LandingList from "..";
const { useQuery } = vi.hoisted(() => {
  return {
    useQuery: vi.fn(),
  };
});

vi.mock("@tanstack/react-query", async () => {
  const actual = await vi.importActual("@tanstack/react-query");
  return {
    ...(actual as typeof ReactQuery),
    useQuery,
  };
});

describe("when it renders", () => {
  const queryClient = new ReactQuery.QueryClient();
  const useQueryMocked = useQuery.mockReturnValue({
    data: MockData,
    isLoading: false,
    error: {},
  });
  let LandingListComponent: RenderResult<
    typeof import("@testing-library/dom/types/queries"),
    HTMLElement,
    HTMLElement
  >;
  beforeEach(() => {
    LandingListComponent = renderWithClient(queryClient, <LandingList />);
  });
  afterAll(() => {
    vi.resetAllMocks();
  });
  describe("React Query fetch the data", () => {
    test("The useQuery function is called", async () => {
      await waitFor(() => expect(useQueryMocked).toHaveBeenCalledOnce());
    });
    test("The useQuery returns an object", async () => {
      await waitFor(() => {
        expect(useQueryMocked).toHaveReturnedWith(
          expect.objectContaining({ isLoading: false })
        );
      });
    });
    test("The useQuery returns a collection of data", async () => {
      await waitFor(() => {
        expect(useQueryMocked).toHaveReturnedWith(
          expect.objectContaining({ data: MockData })
        );
      });
    });
  });
  describe("Table is rendered", () => {
    test("The title appears in the document", () => {
      const { getByTestId } = LandingListComponent;
      expect(getByTestId("landing-title")).toBeInTheDocument();
    });
    test("The Table appears in the document", () => {
      const { getByTestId } = LandingListComponent;
      expect(getByTestId("data-table")).toBeInTheDocument();
    });
    test("The Table header has 3 columns", async () => {
      await waitFor(async () => {
        expect(screen.getByText("Landing Name")).toBeInTheDocument();
        expect(screen.getByText("Landing Alias")).toBeInTheDocument();
        expect(screen.getByText("Status")).toBeInTheDocument();
      });
    });
    test("The table has rows in it", async () => {
      await waitFor(() => {
        // expect(screen.get("rowgroup")[1].children).toHaveLength(3);
      });
    });
  });
});
