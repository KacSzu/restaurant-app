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
export async function createMenuItem(newItem) {
  console.log(newItem);
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch(`/api/v1/menu/new`, {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    });
    if (!res.ok) throw new Error("Order can not be created");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteMenuItem(id) {
  console.log(id);
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch(`/api/v1/menu/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    });
    if (!res.ok) throw new Error("Order can not be deleted");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateMenuSoldOut({ id, newSoldOut }) {
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
