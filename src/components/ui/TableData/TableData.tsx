import { DataGrid, GridColDef } from "@mui/x-data-grid";
import styled from "@emotion/styled";
import tw from "twin.macro";

export type DataTablePropsType = {
  columns: GridColDef[];
  rows: [];
  loading?: boolean;
  pageSize?: number;
};

const DataTable = ({
  rows,
  columns,
  loading,
  pageSize = 10,
}: DataTablePropsType) => {
  return (
    <TableWrapper data-testid="data-table">
      <DataGrid
        rows={rows}
        loading={loading}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: pageSize },
          },
        }}
        className="!text-gray-400 bg-slate-900 border-none !text-xs"
        disableColumnFilter
      />
    </TableWrapper>
  );
};

export default DataTable;

const TableWrapper = styled.div`
  [class*="MuiDataGrid-withBorderColor"],
  .MuiDataGrid-withBorderColor {
    ${tw`!border-none`}
  }
  [class*="-MuiDataGrid-columnHeaders"] {
    ${tw`bg-slate-800`}
  }
  [class*="MuiTablePagination-root"] {
    ${tw`text-gray-400`}
  }
  [class*="MuiDataGrid-iconSeparator"] {
    ${tw`!text-transparent`}
  }
`;
