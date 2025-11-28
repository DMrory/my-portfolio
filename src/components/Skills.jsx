import "../styles/skills.css";

export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL", "Python"];

  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>{skill}</div>
        ))}
      </div>
    </section>
  );
}
