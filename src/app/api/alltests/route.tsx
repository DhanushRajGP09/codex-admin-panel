
import { apiURLs } from "@/components/utiils/config";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  const res = await fetch(
    `${apiURLs.alltest}`,
    { cache: "no-store",headers:{
      authorization: `Bearer ${session?.data.refreshToken}`,
      "Content-Type":"application/json",
    } }
  );
  const reps = await res.json();

  return NextResponse.json(reps);
}
