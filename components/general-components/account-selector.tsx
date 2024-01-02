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

export function AccountSelector(field: any) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select account" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Accounts</SelectLabel>
          <SelectItem value="General" id="account-selector-general-option">
            General
          </SelectItem>
          <SelectItem value="Debit 1" id="account-selector-debit-1-option">
            Debit 1
          </SelectItem>
          <SelectItem value="Debit 2" id="account-selector-debit-2-option">
            Debit 2
          </SelectItem>
          <SelectItem value="Credit 1" id="account-selector-credit-1-option">
            Credit 1
          </SelectItem>
          <SelectItem value="Credeit 2" id="account-selector-credit-1-option">
            Credit 2
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
