import useFadeIn from "../hooks/useFadeIn";

export default function Certifications({ certifications }) {
  const ref = useFadeIn();

  return (
    <section id="certifications" ref={ref} className="fade-section">
      <h2>Certifications</h2>

      {certifications.map((cert, i) => (
        <div key={i} className="card">
          {cert}
        </div>
      ))}
    </section>
  );
}
