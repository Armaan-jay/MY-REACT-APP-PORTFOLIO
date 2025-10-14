import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Stock Market App",
      desc: "It is a real Time Stock Market App which shows the live stock prices of the companies.",
      url: "#",
    },
    {
      name: "Real Estate",
      desc: "It is a real estate website which shows the properties and their details.",
      url: "#",
    },
    {
      name: "E-commerce",
      desc: "It is an e-commerce website which shows the products and their details.",
      url: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="grid three">
          {projects.map((p) => (
            <a className="project-card reveal" key={p.name} href={p.url} target="_blank" rel="noreferrer">
              <div className="project-content">
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <span className="project-cta">View →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
