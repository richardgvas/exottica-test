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
    <TableWrapper data-testid="data-table" className="self-start p-4 pb-0">
      <DataGrid
        rows={rows}
        loading={loading}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: pageSize },
          },
        }}
        className="!text-gray-200 bg-slate-900 border-none !text-xs"
        disableColumnFilter
        disableRowSelectionOnClick
      />
    </TableWrapper>
  );
};

export default DataTable;

const TableWrapper = styled.div`
  [class*="MuiDataGrid-withBorderColor"],
  .MuiDataGrid-withBorderColor {
    ${tw`!border-none`}
    * {
      ${tw`!outline-0`}
    }
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
