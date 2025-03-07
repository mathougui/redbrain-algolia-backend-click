import { ALGOLIA_INSIGHTS_CLIENT } from "@/app/config";
import { NextRequest, NextResponse } from "next/server";
import { ClickedObjectIDsAfterSearch } from "@algolia/client-insights";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    if (!body) {
      return NextResponse.json(
        { results: [] },
        { status: 400 }
      );
    }

    const event: ClickedObjectIDsAfterSearch = JSON.parse(body);
    const response = await ALGOLIA_INSIGHTS_CLIENT.pushEvents({
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