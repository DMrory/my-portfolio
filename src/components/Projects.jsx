import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Asset Management System",
      desc: "A PHP & MySQL system to manage company assets.",
      link: "#"
    },
    {
      title: "React Portfolio",
      desc: "My personal portfolio built with React.",
      link: "#"
    },
    {
      title: "E-commerce App",
      desc: "A full-featured online shopping website.",
      link: "#"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p, index) => (
          <div className="project-card" key={index}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <a href={p.link} className="btn">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}
