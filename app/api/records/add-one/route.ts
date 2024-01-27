import { NextResponse } from "next/server";
import { db, connection } from "@/utils/db/connect";
import { records } from "@/utils/db/schema/records";

export async function POST(Request: Request) {
  const requestBody = await Request.json();

  try {
    const response = await db.insert(records).values({
      type: requestBody.type,
      account: requestBody.account,
      amount: requestBody.amount,
      currency: requestBody.currency,
      record_happened_at: requestBody.date,
      record_created_at: new Date().toISOString(),
    });

    //TODO: imrpove this error handling
    if (response.count === undefined) {
      throw new Error(`DB error! ${response.toString()}`);
    }

    connection.end();
    return NextResponse.json({}, { status: 201 });
  } catch (error) {
    console.error("There was an error!", error);
  }
}
