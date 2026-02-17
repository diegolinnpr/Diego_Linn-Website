import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="container">
      <section className="hero">
        <h1>Hi, I’m Diego Linn.</h1>
        <p>
          Computer Science student at <b>UC Santa Barbara</b> with a background in
          Ballroom Dance + Creative Writing (OCSA). I build projects at the intersection
          of software, data, and creative tech.
        </p>

        <div className="hero__cta">
          <Link className="btn" to="/projects">See projects</Link>
          <Link className="btn btn--ghost" to="/contact">Reach out</Link>
        </div>

        <div className="chips">
          <span className="chip">Python</span>
          <span className="chip">C++</span>
          <span className="chip">React</span>
          <span className="chip">pandas</span>
          <span className="chip">MatPlotLib</span>
        </div>
      </section>

      <section className="card">
        <h2>Quick bio</h2>
        <p>
          I grew up in <b>Irvine, California</b>, and I love combining technical work with
          creative exploration — whether that’s building web experiences or working with EEG signals.
        </p>
      </section>
    </main>
  );
}
