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

export function CurrencySelector(field: any) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select currency" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Currencies</SelectLabel>
          <SelectItem value="TEST1" id="currency-selector-TEST1-option">
            TEST1
          </SelectItem>
          <SelectItem value="TEST2" id="currency-selector-TEST2-option">TEST2</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
