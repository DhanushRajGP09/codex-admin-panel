import { getServerSession } from "next-auth";
import { authOptions } from "../app/api/auth/[...nextauth]/route";
import { apiURLs } from "../utiils/config";



export async function getAllAdmins(testId: string) {
  const session = await getServerSession(authOptions);
  const res = await fetch(`${apiURLs.getalladmins}?testId=${testId}`, {
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
