import { headers } from "next/headers";

export async function getAllDrafts() {
  try {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/myDraft`, {
      method: "GET",
      headers: headers(),
    });

    return {
      data: res.json(),
    };
  } catch (err) {
    console.log(err);
  }
}
