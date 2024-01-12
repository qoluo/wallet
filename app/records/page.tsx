import { RecordsTable } from "@/components/records-components/records-table";
import { TopNavBar } from "@/components/general-components/top-nav-bar";

export default function LandingPage() {
  return (
    <div className="grid h-screen min-h-screen w-full">
      <div className="flex flex-col">
        <TopNavBar />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-6">
            <h2 className="font-semibold text-lg md:text-xl">
              Records Overview
            </h2>
            <RecordsTable />
          </div>
        </main>
      </div>
    </div>
  );
}
