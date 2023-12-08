export async function getOrders() {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    let query = "/api/v1/orders";
    console.log(query);
    const res = await fetch("/api/v1/orders", {
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
