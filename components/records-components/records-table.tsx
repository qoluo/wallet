"use client";

import useSWR from "swr";
import { Payment, columns } from "@/components/records-components/columns";
import { RecordsDataTable } from "@/components/records-components/data-table";
import { getAllRecordsfromDB } from "@/utils/records/get-all-records";

export function RecordsTable() {
  const { data, error } = useSWR(
    "/api/internal-api-handler-get-all-records",
    getAllRecordsfromDB
  );

  if (error || data === undefined) return <div>failed to load</div>;

  return (
    <div className="container mx-auto py-10">
      <RecordsDataTable columns={columns} data={data} />
    </div>
  );
}
