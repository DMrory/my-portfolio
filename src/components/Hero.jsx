import "../styles/Hero.css"; // fix path
import myPhoto from "../assets/myphoto.jpg"; // Replace with your image

export default function Hero() {
  return (
    <section id="home" className="hero fade-in">
      <div className="text">
        <h1>Hello, I'm <span className="primary">Derrick Orori</span></h1>
        <p>Full-Stack Developer • Mobile Apps • Systems Engineer</p>

        <a href="#contact">
          <button>Hire Me</button>
        </a>
      </div>

      <img src={myPhoto} alt="Me" className="profile-img" />
    </section>
  );
}
