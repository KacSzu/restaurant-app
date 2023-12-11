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
export async function updateMenuSoldOut({ id, newSoldOut }) {
  console.log(id, newSoldOut);
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch(`/api/v1/menu/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ soldOut: newSoldOut }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    });
    if (!res.ok) throw new Error("Order can not be updated");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
