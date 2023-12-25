import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";

export function AccountsOverview() {
  return (
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
  );
}
