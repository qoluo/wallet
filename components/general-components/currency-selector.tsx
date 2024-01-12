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
          <SelectItem value="USD" id="currency-selector-USD-option">
            USD
          </SelectItem>
          <SelectItem value="EUR" id="currency-selector-EUR-option">
            EUR
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
