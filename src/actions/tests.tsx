import { apiURLs } from "../utiils/config";

export async function getAllTest() {
    const res = await fetch(
      `${apiURLs.alltest}`,
      { cache: "no-store" }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await res.json();
    return data?.data;
  }
  