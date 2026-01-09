import "./Home.css";

import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <header className="hero-nav">
        <h2 className="logo">Portfolio</h2>


       
      </header>

      <div className="hero-content">
        <div className="hero-image">
        <img src="/image.jpeg" alt="Profile" />

        </div>

        <div className="hero-text">
          <h1>
            Hello This Is <span>Sneha !</span>
          </h1>
          <p>Creative Developer</p>

          {/* Aesthetic emojis (no links) */}
          <div className="socials">
            <span title="Developer">💻</span>
            <span title="Creative">🎨</span>
            <span title="Problem Solver">🧠</span>
            <span title="Tech Enthusiast">🚀</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
