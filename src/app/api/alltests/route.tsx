
import { apiURLs } from "@/components/utiils/config";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const res = await fetch(
    `${apiURLs.alltest}`,
    { cache: "no-store",headers:{
      // Authorization: `${token}`,
    } }
  );
  const reps = await res.json();

  return NextResponse.json(reps);
}
