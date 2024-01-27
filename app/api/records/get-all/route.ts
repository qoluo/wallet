import { NextResponse } from "next/server";
import { db, connection } from "@/utils/db/connect";
import { records } from "@/utils/db/schema/records";

export async function GET(Request: Request) {
  try {
    const response = await db.select().from(records);
    //TODO: imrpove this error handling
    // if (response.count === undefined) {
    //   throw new Error(`DB error! ${response.toString()}`);
    // }

    connection.end();
    return NextResponse.json(response);
  } catch (error) {
    console.error("There was an error!", error);
  }
}
