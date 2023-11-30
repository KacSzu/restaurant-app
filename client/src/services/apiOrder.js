export async function getOrders() {
  try {
    let query = "/api/v1/orders";
    const res = await fetch(query);
    if (!res) throw new Error("Fetching went wrong");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function createOrder(cart) {
  try {
    console.log(JSON.stringify(cart));
    const res = await fetch("/api/v1/orders/new", {
      method: "POST",
      body: JSON.stringify(cart),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res) throw new Error("Fetching went wrong");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
