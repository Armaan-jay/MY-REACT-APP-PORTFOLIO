import React from "react";
import antarikshCert from "../assets/Antariksh Hackathon Cert.jpg";
import ibmSkillsBuild from "../assets/Final Certificate IBM SkillsBuild.pdf";
import sihInternal from "../assets/SIH 2024 INTERNAL CERT.jpg";
import solutionChallenge from "../assets/Solution Challenge 2025.jpg";
import waterTech from "../assets/Water_Tech_Ch_Armaan.jpg";
import genAiCert from "../assets/GEN AI Exchange Program.jpeg";
import codingNinjasFarmsmart from "../assets/Coding Ninjas FarmsmartAI hackathon.jpg";
import sih2023 from "../assets/sih2023.jpg";
import pythonBasicHackerrank from "../assets/armaan_python_basic certificate_page-0001.jpg";
import deloitteCert from "../assets/Deloitte_VInt_armaan_completion_certificate.pdf";
import tataCert from "../assets/tata_job_simulation_cert.pdf";
import iaacCert from "../assets/IAAC_participation_cert.pdf";
import oracleProfessional from "../assets/Oracle_Certified_professional.jpg";
import oracleFoundations from "../assets/Oracle_certified_foundations_associate.jpg";
import sleepwellEffectiveness from "../assets/Sleepwell_preofessional_effectiveness.jpg";

const Card = ({ item }) => {
  const isImage = item.src && /\.(png|jpe?g|gif|webp|svg)$/i.test(item.src);
  const isPdf = item.src && /\.pdf$/i.test(item.src);

  return (
    <div className="card-glass reveal">
      {item.src && (
        <div className="media" style={{ marginBottom: "0.75rem" }}>
          {isImage ? (
            <img src={item.src} alt={item.title} style={{ width: "100%", borderRadius: 12, objectFit: "cover" }} />
          ) : isPdf ? (
            <div className="pdf-chip" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(255, 0, 0, 0.08)",
              color: "#e53935",
              fontWeight: 600,
              fontSize: 12
            }}>
              <span style={{ display: "inline-block", width: 8, height: 8, background: "#e53935", borderRadius: 999 }} />
              PDF Certificate
            </div>
          ) : null}
        </div>
      )}
      <h3 style={{ marginBottom: 6 }}>{item.title}</h3>
      {item.meta && (
        <p className="eyebrow" style={{ marginTop: 0, marginBottom: 8, opacity: 0.85 }}>{item.meta}</p>
      )}
      <p style={{ marginTop: 0 }}>{item.desc}</p>
      {item.src && (
        <div style={{ marginTop: 12 }}>
          <a href={item.src} target="_blank" rel="noreferrer" className="btn small">View Certificate</a>
        </div>
      )}
    </div>
  );
};

const Achievements = () => {
  const awards = [
    {
      title: "Antariksh Hackathon",
      meta: "Hackathon • 2024-2025",
      desc: "Recognized for innovative problem-solving and rapid prototyping during the Antariksh Hackathon, delivering a functional solution under time constraints.",
      src: antarikshCert,
    },
    {
      title: "Smart India Hackathon (Internal Round)",
      meta: "SIH 2024 • Internal Selection",
      desc: "Qualified in the internal round of SIH 2024 with a strong proposal, clear architecture, and demonstrable prototype aligned with problem statements.",
      src: sihInternal,
    },
    {
      title: "Google Solution Challenge 2025",
      meta: "Global Competition • 2025",
      desc: "Participated in the Solution Challenge focusing on building solutions mapped to UN Sustainable Development Goals, emphasizing impact and usability.",
      src: solutionChallenge,
    },
    {
      title: "Water Tech Challenge",
      meta: "Innovation Challenge • Year unspecified",
      desc: "Developed a solution addressing water-related challenges with attention to usability and practical deployment.",
      src: waterTech,
    },
    {
      title: "Gen AI Exchange Program",
      meta: "Generative AI • Exchange Program",
      desc: "Completed an intensive exchange program covering LLM fundamentals, prompt engineering, retrieval-augmented generation (RAG), evaluation, and deployment workflows—culminating in a capstone that integrates Python back-end with a React front-end.",
      src: genAiCert,
    },
    {
      title: "Coding Ninjas FarmSmartAI Hackathon",
      meta: "Hackathon • Coding Ninjas",
      desc: "Designed and demoed an AI-powered agriculture solution (recommendations, insights, and farmer UX) with rapid prototyping and practical impact in mind.",
      src: codingNinjasFarmsmart,
    },
    {
      title: "Smart India Hackathon (SIH 2023)",
      meta: "SIH 2023 • Participation",
      desc: "Collaborated on an end-to-end solution from problem analysis to working demo, emphasizing feasibility, system architecture, and implementation quality.",
      src: sih2023,
    },
    {
      title: "IAAC Astronomy – Participation",
      meta: "International Astronomy and Astrophysics Competition",
      desc: "Participated in IAAC demonstrating interest and engagement with astronomy and astrophysics problem solving; certificate available as PDF.",
      src: iaacCert,
    },
  ];
  const certifications = [
    {
      title: "IBM SkillsBuild – Final Certificate",
      meta: "IBM SkillsBuild",
      desc: "Completed IBM SkillsBuild coursework demonstrating foundational industry-ready skills across technology and professional development modules.",
      src: ibmSkillsBuild,
    },
    {
      title: "HackerRank Python (Basic)",
      meta: "HackerRank",
      desc: "Earned the Python (Basic) certificate by demonstrating fluency with core Python constructs—data types, control flow, functions, OOP basics, standard libraries, and timed problem-solving.",
      src: pythonBasicHackerrank,
    },
    {
      title: "Tata – Virtual Job Simulation",
      meta: "Professional Simulation • PDF",
      desc: "Completed the Tata Group virtual job simulation, delivering task-based solutions mirroring real workplace scenarios: analysis, structured problem solving, and stakeholder-ready outputs.",
      src: tataCert,
    },
    {
      title: "Deloitte – Virtual Job Simulation",
      meta: "Professional Simulation • PDF",
      desc: "Completed Deloitte's virtual job simulation covering consulting workflows: scoping, data analysis, visualization, and client-oriented communication.",
      src: deloitteCert,
    },
    {
      title: "Oracle Certified Professional",
      meta: "Oracle Certification",
      desc: "Achieved Oracle Certified Professional status, demonstrating advanced expertise in Oracle technologies and database management.",
      src: oracleProfessional,
    },
    {
      title: "Oracle Certified Foundations Associate",
      meta: "Oracle Certification",
      desc: "Earned Oracle Certified Foundations Associate certification, validating foundational knowledge of Oracle cloud and database concepts.",
      src: oracleFoundations,
    },
    {
      title: "Sleepwell Professional Effectiveness",
      meta: "Professional Development",
      desc: "Completed Sleepwell's professional effectiveness program, enhancing skills in productivity, time management, and workplace performance.",
      src: sleepwellEffectiveness,
    },
  ];

  return (
    <section id="achievements" className="section alt">
      <div className="container">
        <h2 className="section-title">Achievements</h2>

        <h3 style={{ marginTop: 12 }}>Awards & Hackathons</h3>
        <div className="grid three" style={{ marginTop: 12 }}>
          {awards.map((it) => (
            <Card key={it.title} item={it} />
          ))}
        </div>

        <h3 style={{ marginTop: 32 }}>Professional Certifications</h3>
        <div className="grid three" style={{ marginTop: 12 }}>
          {certifications.map((it) => (
            <Card key={it.title} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
