import "../styles/Projects.css";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="container fade-in">
      <h2>Projects</h2>

      <div className="project-grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            {p.image && <img src={p.image} alt={p.title} className="project-img" />}
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            {p.link && (
              <a href={p.link} className="btn" target="_blank" rel="noopener noreferrer">
                View
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
