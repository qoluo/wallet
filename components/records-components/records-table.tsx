import { Payment, columns } from "@/app/records/columns";
import { RecordsDataTable } from "@/app/records/data-table";
import { getAllRecordsfromDB } from "@/utils/records/get-all-records";

async function getData(): Promise<Payment[]> {
  const all_records = await getAllRecordsfromDB();
  return all_records;
}

export async function RecordsTable() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <RecordsDataTable columns={columns} data={data} />
    </div>
  );
}
