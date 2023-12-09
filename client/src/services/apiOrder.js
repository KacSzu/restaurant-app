export async function getOrders() {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    let query = "/api/v1/orders";

    const res = await fetch(query, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });
    if (!res.ok) throw new Error("Orders can not be loaded");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
export async function getOrdersByStatus(status) {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch(`/api/v1/orders/${status}`, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    if (!res.ok) throw new Error("Orders can not be loaded");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createOrder(cart, tableNumber) {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch("/api/v1/orders/new", {
      method: "POST",

      body: JSON.stringify({ cart, tableNumber }),
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

export async function updateOrderStatus({ _id, newStatus }) {
  console.log(_id, newStatus);
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch(`/api/v1/orders/${_id}`, {
      method: "PATCH",
      body: JSON.stringify({ status: newStatus }),
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
