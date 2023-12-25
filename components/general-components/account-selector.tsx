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

export function AccountSelector() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Accounts</SelectLabel>
          <SelectItem value="General">General</SelectItem>
          <SelectItem value="Debit 1">Debit 1</SelectItem>
          <SelectItem value="Debit 2">Debit 2</SelectItem>
          <SelectItem value="Credit 1">Credit 1</SelectItem>
          <SelectItem value="Credeit 2">Credit 2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
