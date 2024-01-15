import { NextResponse } from "next/server";

export async function POST(Request: Request) {
  const requestBody = await Request.text();
  const WALLET_API_URL = process.env.QOLUO_WALLET_API;
  const WALLET_API_ADD_RECORDS_ENDPOINT =
    process.env.QOLUO_WALLET_API_ADD_RECORDS_ENDPOINT;

  try {
    const request = await fetch(
      `${WALLET_API_URL}/${WALLET_API_ADD_RECORDS_ENDPOINT}`,
      {
        method: "POST",
        headers: Request.headers,
        body: requestBody,
      }
    );

    if (!request.ok) {
      throw new Error(`HTTP error! status: ${request.status}`);
    }
    console.log(NextResponse.json({}, { status: 201 }));
    return NextResponse.json({}, { status: 201 });
  } catch (error) {
    console.error("There was an error!", error);
  }
}
