import { useEffect, useState } from "react";
import { getToken } from "../authStore";
import { apiFetch } from "../api";

export default function Dashboard() {
  const token = getToken();
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function load() {
      // quick demo endpoint that decodes token
      const data = await apiFetch(`/me?token=${encodeURIComponent(token)}`);
      setEmail(data.email);
    }
    load().catch(() => setEmail(""));
  }, [token]);

  return (
    <main className="container">
      <h1>Dashboard</h1>
      <section className="card">
        <p>You’re logged in as: <b>{email || "—"}</b></p>
        <p>This is a protected page you can customize (e.g., admin editing your projects).</p>
      </section>
    </main>
  );
}
