export default function About() {
  return (
    <main className="container">
      <h1>About</h1>

      <section className="card">
        <h2>Background</h2>
        <p>
          I’m a Computer Science student at <b>University of California, Santa Barbara</b>.
          I grew up in <b>Irvine, CA</b>, and I have a background in Ballroom Dance and Creative Writing from <b>Orange County School of the Arts</b>. 
          I’m passionate about building projects at the intersection of software, data, and creative tech.
        </p>
      </section>

      <section className="card">
        <h2>Experience</h2>
        <ul className="list">
          <li><b>Tutor</b> — IV Elementary School</li>
          <li><b>Project Intern</b> — Neurotech Club, UCSB</li>
          <li><b>Member</b> — Data Science Club, UCSB</li>
        </ul>
      </section>

      <section className="card">
        <h2>Skills</h2>
        <div className="chips">
          {["Python", "C++", "React", "HTML/CSS", "JavaScript", "MatPlotLib", "pandas", "VS Code"].map(s => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>
      </section>
    </main>
  );
}
