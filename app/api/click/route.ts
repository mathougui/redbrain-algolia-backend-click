import client from "@/app/config";
import { NextRequest, NextResponse } from "next/server";
import { ClickedObjectIDsAfterSearch } from "@algolia/client-insights";

const insights_client = client.initInsights({ region: 'us' });

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    if (!body) {
      return NextResponse.json(
        { results: [] },
        { status: 400 }
      );
    }

    console.log(body)

    const event: ClickedObjectIDsAfterSearch = JSON.parse(body);
    const response = await insights_client.pushEvents({
      events: [event],
    });

    return NextResponse.json(
      { response },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error on sending event:", error)
    return NextResponse.json(
      { results: [] },
      { status: 500 }
    );
  }
}