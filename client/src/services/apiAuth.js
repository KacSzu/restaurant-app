export async function login(email, password) {
  try {
    const res = await fetch("/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(email, password),
    });
    if (!res.ok) {
      throw new Error("User can not log in");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
