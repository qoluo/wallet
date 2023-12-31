"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/general-components/date-picker";
import { AccountSelector } from "@/components/general-components/account-selector";
import { RecordTypeSelector } from "@/components/general-components/record-type-selector";
import { CurrencySelector } from "@/components/general-components/currency-selector";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  recordType: z.string().min(1, {
    message: "Please select a record type.",
  }),
  account: z.string().min(1, {
    message: "Please select an account.",
  }),
  amount: z.string().transform(parseFloat).refine(value => value > 0, {
    message: "Please enter amount higher than 0.",
  }),
  currency: z.string().min(1, {
    message: "Please select a currency.",
  }),
  date: z.date(),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(12312312);
  console.log(values);
}

export function AddRecord() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recordType: "",
      account: "",
      amount: 0,
      currency: "",
      date: new Date(),
    },
  });

  return (
    <Form {...form}>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full ml-auto" variant="outline">
            Add Record
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Record</DialogTitle>
            <DialogDescription>
              Add expense, income or transfer money from one account to another.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4 py-4">
              <FormField
                control={form.control}
                name="recordType"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-3">
                      <FormLabel className="text-right">Record Type</FormLabel>
                      <FormControl>
                        <RecordTypeSelector {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="account"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-3">
                      <FormLabel className="text-right">Account</FormLabel>
                      <FormControl>
                        <AccountSelector />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-3">
                      <FormLabel className="text-right">Amount</FormLabel>
                      <FormControl>
                        <Input
                          id="record-amount"
                          defaultValue="0"
                          className="col-span-2"
                          {...field}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currency"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-3">
                      <FormLabel className="text-right">Currency</FormLabel>
                      <FormControl>
                        <CurrencySelector />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-3">
                      <FormLabel className="text-right">Date</FormLabel>
                      <FormControl>
                        <DatePicker />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </Form>
  );
}
