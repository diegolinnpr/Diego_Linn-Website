import { useState } from "react";
import { apiFetch } from "../api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", msg: "" });

  async function onSubmit(e) {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });
    try {
      await apiFetch("/contact", { method: "POST", body: form });
      setStatus({ type: "ok", msg: "Sent! I’ll get back to you soon." });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "err", msg: err.message });
    }
  }

  return (
    <main className="container">
      <h1>Reach out</h1>

      <section className="card">
        <p>
          Prefer email? You can always reach me at <b>diegolinnpr@gmail.com</b>.
          Or send a message here:
        </p>

        <form className="form" onSubmit={onSubmit}>
          <label>
            Name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Your name"
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@email.com"
              required
            />
          </label>

          <label>
            Message
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="What’s up?"
              rows={6}
              required
            />
          </label>

          <button className="btn" disabled={status.type === "loading"}>
            Send message
          </button>

          {status.type !== "idle" && (
            <p className={status.type === "ok" ? "ok" : status.type === "err" ? "err" : ""}>
              {status.msg}
            </p>
          )}
        </form>
      </section>
    </main>
  );
}
