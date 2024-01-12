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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/general-components/date-picker";
import { AccountSelector } from "@/components/general-components/account-selector";
import { RecordTypeSelector } from "@/components/general-components/record-type-selector";
import { CurrencySelector } from "@/components/general-components/currency-selector";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/components/ui/use-toast";
import * as z from "zod";
import { useState } from "react";
import { mutate } from "swr";

export const formSchema = z.object({
  recordType: z.string().min(1, {
    message: "Please select a record type.",
  }),
  account: z.string().min(1, {
    message: "Please select an account.",
  }),
  amount: z
    .string()
    .transform(parseFloat)
    .refine((value) => value > 0, {
      message: "Please enter amount higher than 0.",
    }),
  currency: z.string().min(1, {
    message: "Please select a currency.",
  }),
  date: z.date(),
});

export function AddRecord() {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recordType: "",
      account: "",
      currency: "",
      date: new Date(),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const requestBody = {
      type: values["recordType"],
      account: values["account"],
      amount: values["amount"],
      currency: values["currency"],
      date: values["date"],
    };
    try {
      const response = await fetch(`/api/internal-api-handler-add-record`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Failed!",
          description: `Failed to add new record. Please try again.`,
        });
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (response.ok && response.status === 201) {
        form.reset({
          recordType: "Select record TYPE",
          account: "",
          amount: 0,
          currency: "",
          date: new Date(),
        });

        // close the dialog after successful api call
        setOpen(false);

        // refresh the table after successful addition of new record
        mutate("/api/internal-api-handler-get-all-records");

        toast({
          title: "Success!",
          description: `New record has been added.`,
        });
      }
    } catch (error) {
      console.error("There was an error!", error);
    }
  }

  return (
    <Form {...form}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="rounded-full ml-auto" variant="outline">
            Add Record
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Record</DialogTitle>
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
                        <AccountSelector {...field} />
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
                        <CurrencySelector {...field} />
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
                        <DatePicker {...field} />
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
