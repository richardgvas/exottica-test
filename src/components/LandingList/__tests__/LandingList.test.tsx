import { RenderResult, waitFor } from "@testing-library/react";
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
  test("the useQuery is called", async () => {
    await waitFor(
      () => {
        expect(useQueryMocked).toHaveBeenCalledOnce();
      }
      // Add anything for the mutation options, or provide them if necessary
    );
  });
  test("the useQuery returns one object", async () => {
    await waitFor(() => {
      expect(useQueryMocked).toHaveReturnedWith(
        expect.objectContaining({ isLoading: false })
      );
    });
  });
});
