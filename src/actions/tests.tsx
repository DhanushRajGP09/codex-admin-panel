import { getServerSession } from "next-auth";
import { apiURLs } from "../utiils/config";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { NextRequest, NextResponse } from "next/server";

export async function getAllTest() {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${apiURLs.alltest}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${session?.backendToken}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data?.data;
}

export async function getSearchTest(
  name: string | undefined,
  itemsPerPage: number,
  page: number,
  sortBy: { key: string; direction: string }[]
) {

  const session = await getServerSession(authOptions);
  const res = await fetch(`${apiURLs.searchtest}`, {
    method:"POST",
    headers: {
      authorization: `Bearer ${session?.backendToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      testName: name,
      itemsPerPage: itemsPerPage,
      page: page,
      sortBy: sortBy,
    }),
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  console.log("datainsearch",data)
  return ;
}


export async function getParticularTest(id:string) {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${apiURLs.particulartest}?testId=${id}`, {
    cache: "no-store",
    headers: {
      authorization: `Bearer ${session?.backendToken}`,
      "Content-Type": "application/json",
    },
    
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data?.data;
}
