import * as z from "zod";

export const formSchemaForRecords = z.object({
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

export async function onSubmitForRecords(
  values: z.infer<typeof formSchemaForRecords>
) {
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
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("There was an error!", error);
  }
}
