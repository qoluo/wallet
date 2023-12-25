"use client";
import { AddRecord } from "@/components/records-components/add-record-button";
import { usePathname } from "next/navigation";

export function TopNavBar() {
  const selectedPage = usePathname();
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
      {selectedPage == "/records" ? <AddRecord /> : <div></div>}
    </header>
  );
}
