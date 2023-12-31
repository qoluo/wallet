import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RecordTypeSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select record type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Record Types</SelectLabel>
          <SelectItem value="Income">Income</SelectItem>
          <SelectItem value="Expense">Expense</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
