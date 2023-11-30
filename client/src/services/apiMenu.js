export async function getMenu(filter) {
  try {
    let query = "/api/v1/menu";
    if (filter) {
      query = `/api/v1/menu${filter}`;
    }
    const res = await fetch(query);
    if (!res.ok) throw new Error("Fetching went wrong");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
