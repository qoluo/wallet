"use client";

import useSWR from "swr";
import { columns } from "@/components/records-components/columns";
import { RecordsDataTable } from "@/components/records-components/data-table";
import { fetchUtil } from "@/utils/swr-fetch";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export function RecordsTable() {
  const [randomProgressBarNumber, setRandom] = useState(0);

  const { data, error, isLoading } = useSWR("/api/records/get-all", fetchUtil);
  useEffect(() => {
    setRandom(Math.floor(Math.random() * 100));
  }, []);

  if (error) return <div>Error loading data</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/3 mx-auto p-3 shadow mt-[-20%]">
          <Progress value={randomProgressBarNumber} />
        </div>
      </div>
    );
  return (
    <div className="container mx-auto py-10" id="records-table">
      <RecordsDataTable columns={columns} data={data} />
    </div>
  );
}
