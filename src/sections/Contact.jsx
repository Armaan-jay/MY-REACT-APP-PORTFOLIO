import React from "react";

const Icon = ({ path, label }) => (
  <svg className="icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d={path} />
    <title>{label}</title>
  </svg>
);

const Contact = () => {
  // Replace '#' with your actual profiles
  const social = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/_ch_armaan_jay_2404/?__pwa=1",
      path: "M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z"
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/armaan.jay.75",
      path: "M13 22v-8h3l1-4h-4V7c0-1.1.9-2 2-2h2V1h-3a5 5 0 00-5 5v4H6v4h3v8h4z"
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/armaan-ch-2a07b4289/",
      path: "M6 9H2v13h4V9zM4 2a2 2 0 110 4 2 2 0 010-4zm6 7H6v13h4v-7c0-1.7 1.3-3 3-3s3 1.3 3 3v7h4v-8c0-3.3-2.7-6-6-6-1.3 0-2.5.4-3.5 1z"
    },
    {
      label: "Arrattai",
      href: "https://arratai.in/", 
      path: "M3 5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-6l-5 4v-4H5a2 2 0 01-2-2V5z"
    },
  ];

  return (
    <section id="contact" className="section alt">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">
          I'm open to freelance, full-time opportunities, and collaborations. Let's build something great together.
        </p>
        <div className="social-row">
          {social.map((s) => (
            <a key={s.label} className="social" href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
              <Icon path={s.path} label={s.label} />
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
