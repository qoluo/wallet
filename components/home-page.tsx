"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import { AddRecord } from "./add-record-button";

export default function LandingPage() {
  return (
    <div className="grid h-screen min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#">
              <WalletIcon className="h-6 w-6" />
              <span className="">Qoluo Wallet</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="/"
              >
                <HomeIcon className="h-4 w-4" />
                Home
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="expenses-page"
              >
                <CreditCardIcon className="h-4 w-4" />
                Expenses
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="analytics-page"
              >
                <LineChartIcon className="h-4 w-4" />
                Analytics
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="records-page"
              >
                <ListIcon className="h-4 w-4" />
                Records
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <WalletIcon className="h-6 w-6" />
          </Link>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </form>
          </div>
          <AddRecord />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="grid gap-6">
            <h2 className="font-semibold text-lg md:text-xl">
              Records Overview
            </h2>
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Record ID</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>#123456</TableCell>
                    <TableCell>Bank Account</TableCell>
                    <TableCell>$200.00</TableCell>
                    <TableCell>12/10/2023</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#123457</TableCell>
                    <TableCell>Credit Card</TableCell>
                    <TableCell>-$50.00</TableCell>
                    <TableCell>12/09/2023</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            <h2 className="font-semibold text-lg md:text-xl">
              Records Analytics
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardDescription>Expenses by Record</CardDescription>
                  <CardTitle>$2389.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart className="w-full h-[300px]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Income by Record</CardDescription>
                  <CardTitle>$3454.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <BarChart className="w-full h-[300px]" />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Net Balance by Record</CardDescription>
                  <CardTitle>$1065.00</CardTitle>
                </CardHeader>
                <CardContent>
                  <PieChart className="w-full h-[300px]" />
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function BarChart(props) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          {
            name: "A",
            data: 111,
          },
          {
            name: "B",
            data: 157,
          },
          {
            name: "C",
            data: 129,
          },
          {
            name: "D",
            data: 187,
          },
          {
            name: "E",
            data: 119,
          },
          {
            name: "F",
            data: 22,
          },
          {
            name: "G",
            data: 101,
          },
          {
            name: "H",
            data: 83,
          },
        ]}
        keys={["data"]}
        indexBy="name"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Name",
          legendPosition: "middle",
          legendOffset: 45,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number",
          legendPosition: "middle",
          legendOffset: -45,
          truncateTickAt: 0,
        }}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function BellIcon(props) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CreditCardIcon(props) {
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
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function HomeIcon(props) {
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

function LineChartIcon(props) {
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

function ListIcon(props) {
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

function PieChart(props) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          {
            id: "A",
            value: 634,
          },
          {
            id: "B",
            value: 456,
          },
          {
            id: "C",
            value: 150,
          },
          {
            id: "D",
            value: 258,
          },
          {
            id: "E",
            value: 511,
          },
        ]}
        sortByValue
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        cornerRadius={0}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLabel="id"
        arcLabelsRadiusOffset={0.6}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        enableArcLinkLabels={false}
        colors={{ scheme: "paired" }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 50,
            itemHeight: 18,
            itemDirection: "left-to-right",
            symbolSize: 18,
            symbolShape: "circle",
          },
        ]}
        theme={{
          tooltip: {
            container: {
              fontSize: "12px",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function WalletIcon(props) {
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
