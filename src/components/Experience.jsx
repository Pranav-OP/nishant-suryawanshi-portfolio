import useFadeIn from "../hooks/useFadeIn";

export default function Experience({ experience }) {
  const ref = useFadeIn();
  return (
    <section id="experience" ref={ref} className="fade-section">
      <h2>Experience</h2>
      {experience.map((exp, i) => (
        <div key={i} className="card">
          <h3>
            {exp.role} <span style={{ color: "var(--muted)" }}>@ {exp.company}</span>
          </h3>

          <small>{exp.duration} | {exp.location}</small>
          <ul>
            {exp.points.map((p, idx) => (
              <li key={idx}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
