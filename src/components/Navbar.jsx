import { useState } from "react";
import "../styles/Navbar.css"; // fix path

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="nav">
      <h1 className="logo">MyPortfolio</h1>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="actions">
        <button className="dark-btn" onClick={toggleDarkMode}>🌙</button>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
}
