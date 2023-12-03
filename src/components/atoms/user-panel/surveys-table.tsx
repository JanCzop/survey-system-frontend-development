"use client";

import { useContext, useEffect, useState } from "react";
import {
  DataGrid,
  type GridColDef,
  type GridRenderCellParams,
} from "@mui/x-data-grid";
import Link from "next/link";
import { ChartPieIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import { UserContext } from "@/components/_auth/user-context";

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:3000";

const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Nazwa",
    flex: 2,
    headerClassName: "table-header",
  },
  {
    field: "startDate",
    headerName: "Data rozpoczęcia",
    flex: 1,
    headerClassName: "table-header",
  },
  {
    field: "endDate",
    headerName: "Data zakończenia",
    flex: 1,
    headerClassName: "table-header",
  },
  {
    field: "link",
    headerName: "Link do ankiety",
    flex: 2,
    headerClassName: "table-header",
    renderCell: (params: GridRenderCellParams) => (
      <Link href={params.value as string}>{params.value}</Link>
    ),
  },
  {
    field: "analysisLink",
    headerName: "Akcje",
    flex: 0.5,
    headerClassName: "table-header",
    headerAlign: "center",
    align: "center",
    renderCell: (params: GridRenderCellParams) => (
      <div className="flex items-center gap-2">
        <Link href={params.value as string}>
          <ChartPieIcon className="h-6 w-6 text-green-500" />
        </Link>
        <Link href={`/ankiety/${params.id}`}>
          <PencilSquareIcon className="h-6 w-6 text-blue-500" />
        </Link>
      </div>
    ),
  },
];

const SurveysTable = () => {
  const { token } = useContext(UserContext);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    fetch(`${FRONTEND_URL}/surveys/api`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data: Row[]) => {
        setRows(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-full w-5/6 rounded-lg bg-white p-3">
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        sx={{
          padding: "1px",
        }}
        autoPageSize
      />
    </div>
  );
};

export default SurveysTable;
