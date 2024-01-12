"use client";

import useSWR from "swr";
import { columns } from "@/components/records-components/columns";
import { RecordsDataTable } from "@/components/records-components/data-table";
import { getAllRecordsfromDB } from "@/utils/records/get-all-records";
import { Progress } from "@/components/ui/progress";

export function RecordsTable() {
  const { data, error, isLoading } = useSWR(
    "/api/internal-api-handler-get-all-records",
    getAllRecordsfromDB
  );

  if (error) return <div>Error loading data</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/3 mx-auto p-3 shadow mt-[-20%]">
          <Progress value={Math.floor(Math.random() * 100)} />
        </div>
      </div>
    );

  return (
    <div className="container mx-auto py-10">
      <RecordsDataTable columns={columns} data={data} />
    </div>
  );
}
