import TableData, { DataTablePropsType } from "../ui/TableData";
import { useQuery } from "@tanstack/react-query";
import { GridValueGetterParams } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { getLandings } from "../../services/LandingService";

const LandingList = () => {
  const { t } = useTranslation("translation", {
    keyPrefix: "landingList",
  });
  const { isLoading, data } = useQuery({
    queryKey: ["landings"],
    queryFn: getLandings,
  });

  const columns: DataTablePropsType["columns"] = [
    {
      field: "landingAlias",
      headerName: t("table.landingAlias"),
      minWidth: 250,
      align: "left",
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
    },
    {
      field: "landingName",
      headerName: t("table.landingName"),
      minWidth: 250,
      align: "left",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "status",
      headerName: t("table.status"),
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.status.toString() || ""}`,
      minWidth: 250,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "market",
      headerName: t("table.market"),
      minWidth: 150,
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "actions",
      headerName: t("table.actions"),
      disableColumnMenu: true,
    },
  ];
  return (
    <div className="flex flex-col grow gap-3 min-w-full h-full justify-center p-4 items-center">
      <h2 data-testid="landing-title">{t("title")}</h2>
      {(isLoading && "is loading ...") || (
        <TableData rows={data || []} columns={columns} />
      )}
    </div>
  );
};
export default LandingList;
