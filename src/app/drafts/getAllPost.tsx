export async function getAllDrafts() {
  try {
    const res = await fetch("/api/post", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    return {
      data: res.json(),
    };
  } catch (err) {
    console.log(err);
  }
}
