import { Chip } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import TableData, { DataTablePropsType } from "../ui/TableData";
import isPrimeNumber from "../../utils/numbers/primeNumbers";
import Actions from "../ui/Actions";
import { useCallback, useEffect, useState } from "react";
import LandingsFilter from "./LandingsFilter";
import { getLandings } from "../../services/LandingService";

type LandingType = {
  landingAlias: string;
  landingName: string;
  status: boolean;
  [key: string]: any;
};

const LandingList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "landingList",
  });
  const [selectedLanding, setSelectedLanding] = useState({
    id: null,
    action: null,
  });
  const [filter, setFilter] = useState<string>("");
  const filterLandingsBySearch = useCallback(
    (landings: Array<LandingType>) => {
      if (!filter) return landings;
      return landings.filter((landing) =>
        landing?.landingName.includes(filter.toLowerCase())
      );
    },
    [filter]
  );

  const {
    data: landings = [],
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["landings"],
    queryFn: getLandings,
    refetchOnWindowFocus: false,
    retry: 2,
    select: filterLandingsBySearch,
  });

  useEffect(() => {
    if (selectedLanding.action) {
      alert(
        `a landing has been selected ${selectedLanding.action} ${selectedLanding.id}`
      );
    }
  }, [selectedLanding]);

  const columns: DataTablePropsType["columns"] = [
    {
      field: "landingName",
      headerName: t("table.landingName"),
      minWidth: 250,
      align: "left",
      sortable: false,
      disableColumnMenu: true,
      cellClassName: "!pl-4",
      headerClassName: "!pl-4",
      renderCell: (params) => {
        const isPrime = isPrimeNumber(Number(params.row.id));
        return (
          <span
            className={`${
              isPrime ? "italic text-white font-bold" : "text-gray-200"
            }  capitalize`}
          >
            {params.row.landingName}
          </span>
        );
      },
    },
    {
      field: "landingAlias",
      headerName: t("table.landingAlias"),
      minWidth: 250,
      align: "left",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return <span className="font-bold">{params.row.landingAlias}</span>;
      },
    },
    {
      field: "status",
      headerName: t("table.status"),
      renderCell: (params) => {
        const { status } = params.row;
        const active = status ? t("table.active") : t("table.inactive");
        return (
          <Chip
            label={active}
            color={`${status ? "success" : "error"}`}
            size="small"
            className="!text-xs"
          />
        );
      },
      minWidth: 250,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "market",
      headerName: t("table.market"),
      minWidth: 150,
      align: "left",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "actions",
      headerName: t("table.actions"),
      disableColumnMenu: true,
      renderCell: (params) => (
        <Actions
          callBack={({ action }) =>
            setSelectedLanding({ id: params.row.id, action })
          }
        />
      ),
      cellClassName: "!outline-0",
    },
  ];
  return (
    <div className="flex flex-col grow gap-3 min-w-full justify-center p-4 items-center">
      <h2 data-testid="landing-title" className="text-left self-start pl-4">
        {t("title")}
      </h2>
      <LandingsFilter filter={filter} setFilter={setFilter} />
      {(error && "is an error...") || (isLoading && "is loading ...") || (
        <TableData rows={landings} columns={columns} loading={isFetching} />
      )}
    </div>
  );
};
export default LandingList;
