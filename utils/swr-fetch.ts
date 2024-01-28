export async function fetchUtil(endpoint: string) {
  const res = await fetch(endpoint, {
    method: "GET",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data from internal API handler.");
  }

  return res.json();
}
