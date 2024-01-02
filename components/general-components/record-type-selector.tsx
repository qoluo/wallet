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

export function RecordTypeSelector(field: any) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select record type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Record Types</SelectLabel>
          <SelectItem value="Income" id="record-type-selector-income-option">Income</SelectItem>
          <SelectItem value="Expense" id="record-type-selector-expense-option">Expense</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
