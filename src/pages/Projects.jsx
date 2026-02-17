export default function Projects() {
  return (
    <main className="container">
      <h1>Projects</h1>

      <section className="card">
        <h2>Drone controlled by EEG (OpenBCI)</h2>
        <p>
          A drone control system driven by EEG data transmitted by OpenBCI software.
          I led the <b>binary data transfer pipeline</b> from the <b>Cyton Board</b>, including
          parsing and extracting signals, and I work on <b>EEG classification + labeling</b>. 
          This project is a work in progress, and I’m excited to keep improving it!
        </p>
        <div className="meta">
          <span className="chip">OpenBCI</span>
          <span className="chip">Cyton</span>
          <span className="chip">Signal parsing</span>
          <span className="chip">Classification</span>
        </div>
      </section>

      <section className="card">
        <h2>Fractals website</h2>
        <p>
          An interactive site that displays a fractals model users can play with, plus
          explanations of fractals and how they’re used in <b>computer graphics</b> and
          <b> modeling real-world natural patterns</b>. The site is built with React and displays
          the fractal models using WebGL. My contributions include the website design, React components, 
          and implementation of model visualization interaction. I also designed framework and the workflow 
          which includes professional level linting. This project is a work in progress, and I’m excited to keep improving it!
        </p>
        <div className="meta">
          <span className="chip">React</span>
          <span className="chip">Visualization</span>
          <span className="chip">Education</span>
        </div>
      </section>
    </main>
  );
}
