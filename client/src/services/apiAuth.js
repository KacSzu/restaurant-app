export async function login({ email, password }) {
  try {
    const res = await fetch("/api/v1/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
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

export async function signup({ email, password, firstName, role }) {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch("/api/v1/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
      body: JSON.stringify({ email, password, firstName, role }),
    });
    if (!res.ok) {
      throw new Error("Can not signup new user");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function updateUserPassword({ password, confirmPassword }) {
  const user = JSON.parse(localStorage.getItem("user") || null);
  try {
    const res = await fetch("/api/v1/user/password/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
      body: JSON.stringify({ password, confirmPassword }),
    });
    if (!res.ok) {
      throw new Error("Can not change user password");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
