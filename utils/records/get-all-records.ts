export async function getAllRecordsfromDB() {
  const res = await fetch(
    "http://localhost:3000/api/internal-api-handler-get-all-records",
    {
      method: "POST",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data from internal API handler.");
  }

  return res.json();
}
