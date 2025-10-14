import React from "react";

const About = () => {
  const skills = [
    // Core
    "Python",
    "Machine Learning",
    "Data Analysis",
    "LLMs",
    "Prompt Engineering",
    "RAG",
    "LangChain",
    // Front-end
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS / Tailwind",
    // Tooling & Collaboration
    "Vite",
    "Git",
    "REST APIs",
    "Figma",
  ];

  const highlights = [
    "IBM SkillsBuild – Final Certificate",
    "SIH 2024 – Internal Round",
    "Antariksh Hackathon",
    "Google Solution Challenge 2025",
    "Water Tech Challenge",
    "Gen AI Exchange Program",
  ];

  return (
    <section id="about" className="section">
      <div className="container" style={{
        background: "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: 16,
        boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        padding: 'min(28px, 4vw)'
      }}>
        <h2 className="section-title" style={{ position: 'relative', paddingBottom: 8 }}>About
          <span aria-hidden style={{
            position: 'absolute', left: 0, bottom: 0,
            width: 84, height: 3, borderRadius: 3,
            background: 'linear-gradient(90deg, #7c5cff, #00e0b8)',
            display: 'block', boxShadow: '0 6px 20px rgba(124,92,255,0.35)'
          }} />
        </h2>
        <p className="section-text">
          I'm a Python and Machine Learning developer with a growing focus on Generative AI—working with LLMs, prompt engineering,
          and retrieval‑augmented generation (RAG). I enjoy building prediction systems and data-driven features, and translating them
          into performant, accessible React interfaces. Hackathons and exchange programs have sharpened my rapid prototyping and
          problem‑solving skills while maintaining clean, user‑centered design.
        </p>
        <div className="chip-row">
          {skills.map((s) => (
            <span key={s} className="chip">{s}</span>
          ))}
        </div>

        <h3 className="section-subtitle" style={{ marginTop: 24 }}>Certifications & Highlights</h3>
        <div className="chip-row">
          {highlights.map((h) => (
            <span key={h} className="chip ghost">{h}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
