import { NextResponse } from "next/server";

export async function GET() {
    console.log("With cron job");
    return NextResponse.json({
        ok: true,
    })
}