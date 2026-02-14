import useFadeIn from "../hooks/useFadeIn";

export default function Education({ education }) {
  const ref = useFadeIn();

  return (
    <section id="education" ref={ref} className="fade-section">
      <h2>Education</h2>

      {education.map((edu, i) => (
        <div key={i} className="card">
          <strong>{edu.degree}</strong>
          <p>{edu.institution}</p>
          <small>
            {edu.duration} | {edu.location}
          </small>
        </div>
      ))}
    </section>
  );
}
