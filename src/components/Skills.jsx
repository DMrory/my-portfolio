import "../styles/Skills.css";
import skills from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="container fade-in">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div className="skill-card" key={i}>
            {skill.icon && <img src={skill.icon} alt={skill.name} />}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
