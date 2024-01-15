import { NextResponse } from "next/server";

export async function GET(Request: Request) {
  const WALLET_API_URL = process.env.QOLUO_WALLET_API;
  const QOLUO_WALLET_API_GET_ALL_RECORDS_ENDPOINT =
    process.env.QOLUO_WALLET_API_GET_ALL_RECORDS_ENDPOINT;

  try {
    const response = await fetch(
      `${WALLET_API_URL}/${QOLUO_WALLET_API_GET_ALL_RECORDS_ENDPOINT}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json({}, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("There was an error!", error);
    return NextResponse.json({}, { status: 500 });
  }
}
