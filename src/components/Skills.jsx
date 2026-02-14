import useFadeIn from "../hooks/useFadeIn";
export default function Skills({ skills }) {
  const ref = useFadeIn();
  return (
    <section id="skills" ref={ref} className="fade-section">
      <h2>Technical Skills</h2>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "3rem" }}>
          <h3 style={{ marginBottom: "1rem" }}>{category}</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "1rem"
            }}
          >
            {items.map((skill, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  textAlign: "center",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  cursor: "default"
                }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
