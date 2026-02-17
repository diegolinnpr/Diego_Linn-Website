import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiFetch } from "../api";
import { setToken } from "../authStore";

export default function Signup() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setErr("");
    try {
      const data = await apiFetch("/auth/signup", { method: "POST", body: { email, password } });
      setToken(data.access_token);
      nav("/dashboard");
    } catch (e2) {
      setErr(e2.message);
    }
  }

  return (
    <main className="container">
      <h1>Create account</h1>
      <section className="card">
        <form className="form" onSubmit={onSubmit}>
          <label>
            Email
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
          </label>
          <label>
            Password (min 8 chars)
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </label>
          <button className="btn">Sign up</button>
          {err && <p className="err">{err}</p>}
        </form>
      </section>
    </main>
  );
}
