"use client";
import { AddRecord } from "@/components/records-components/add-record-button";
import { usePathname } from "next/navigation";
import { ThemeModeToggle } from "@/components/general-components/dark-mode-toggle";

export function TopNavBar() {
  const selectedPage = usePathname();
  return (
    <div>
      <header className="flex justify-between h-14 lg:h-[60px] items-center gap-4 border-b  px-6 ">
        {selectedPage == "/records" ? <AddRecord /> : <div />}
        <ThemeModeToggle />
      </header>
    </div>
  );
}
