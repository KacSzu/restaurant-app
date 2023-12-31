export async function getOrders(status, filter) {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    let query = "https://restaurant-app-api-b3nr.onrender.com/api/v1/orders";
    let url;

    if (filter) {
      url = `${query}/${status}${filter}`;
    } else if (status) {
      url = `${query}/${status}`;
    } else {
      url = query;
    }

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    if (!res.ok) {
      throw new Error("Orders cannot be loaded");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createOrder(cart, tableNumber) {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch(
      "https://restaurant-app-api-b3nr.onrender.com/api/v1/orders/new",
      {
        method: "POST",

        body: JSON.stringify({ cart, tableNumber }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      },
    );
    if (!res.ok) throw new Error("Order can not be created");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateOrderStatus({ id, newStatus }) {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch(
      `https://restaurant-app-api-b3nr.onrender.com/api/v1/orders/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify({ status: newStatus }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user?.token}`,
        },
      },
    );
    if (!res.ok) throw new Error("Order can not be updated");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
