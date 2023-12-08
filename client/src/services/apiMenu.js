export async function getMenu(filter) {
  const user = JSON.parse(localStorage.getItem("user")) || undefined;
  try {
    let query = "/api/v1/menu";
    if (filter) {
      query = `/api/v1/menu${filter}`;
    }
    const res = await fetch(query, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });
    if (!res.ok) throw new Error("Menu can not be loaded");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
