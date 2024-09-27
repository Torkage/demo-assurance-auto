import { NextRequest, NextResponse } from "next/server";

const TOKEN = process.env.SIV_TOKEN;
const HOSTNAME = "https://api.apiplaqueimmatriculation.com";

export async function POST(req: NextRequest) {
  const { immatriculation } = await req.json();

  if (!immatriculation) {
    return NextResponse.json(
      { message: "Immatriculation is required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `${HOSTNAME}/get-vehicule-info?host_name=${HOSTNAME}&immatriculation=${immatriculation}&token=${TOKEN}&format=json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch vehicle info");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching vehicle info:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
