import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Hello, I'm <span>Your Name</span></h1>
        <p>A Professional Web Developer & Designer</p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
}
