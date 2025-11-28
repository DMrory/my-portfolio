import "../styles/Projects.css"; // fix path
export default function Projects() {
  return (
    <section id="projects" className="container fade-in">
      <h2>Projects</h2>

      <div className="project-grid">
        <div className="card">
          <h3>Asset Management System</h3>
          <p>Full PHP + MySQL system for company asset tracking.</p>
        </div>

        <div className="card">
          <h3>Mobile App</h3>
          <p>Cross-platform Flutter app with Firebase backend.</p>
        </div>

        <div className="card">
          <h3>Portfolio Website</h3>
          <p>Modern personal portfolio built with Vite React.</p>
        </div>
      </div>
    </section>
  );
}
