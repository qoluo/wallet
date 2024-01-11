"use client";
import { AddRecord } from "@/components/records-components/add-record-button";
import { usePathname } from "next/navigation";
import { ThemeModeToggle } from "@/components/general-components/theme-mode-toggle";
import Link from "next/link";

export function TopNavBar() {
  const selectedPage = usePathname();
  return (
    <div>
      <header className="flex justify-between h-14 lg:h-[60px] items-center gap-4 border-b  px-6 ">
        <div className="flex flex-row h-[60px] items-center border-b px-6">
          <Link
            className="flex flex-row items-center gap-2 font-semibold"
            href="#"
          >
            <WalletIcon className="h-6 w-6" />
            <div className="flex flex-row">
              <span className="">Qoluo</span>
              <span className="ml-1">Wallet</span>
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center w-full">
          <nav className="flex gap-4">
            <Link
              className={
                selectedPage == "/"
                  ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              }
              href="/"
            >
              <HomeIcon className="h-4 w-4" />
              Home
            </Link>
            <Link
              className={
                selectedPage == "/analytics"
                  ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              }
              href="analytics"
            >
              <LineChartIcon className="h-4 w-4" />
              Analytics
            </Link>
            <Link
              className={
                selectedPage == "/records"
                  ? "flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                  : "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              }
              href="records"
            >
              <ListIcon className="h-4 w-4" />
              Records
            </Link>
          </nav>
        </div>
        <div className="flex">
          {selectedPage == "/records" ? (
            <AddRecord />
          ) : (
            <div className="invisible">
              <AddRecord />
            </div>
          )}
        </div>
        <ThemeModeToggle />
      </header>
    </div>
  );
}

function HomeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function ListIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="8" x2="21" y1="6" y2="6" />
      <line x1="8" x2="21" y1="12" y2="12" />
      <line x1="8" x2="21" y1="18" y2="18" />
      <line x1="3" x2="3.01" y1="6" y2="6" />
      <line x1="3" x2="3.01" y1="12" y2="12" />
      <line x1="3" x2="3.01" y1="18" y2="18" />
    </svg>
  );
}

function WalletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
    </svg>
  );
}
