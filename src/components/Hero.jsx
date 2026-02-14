import useFadeIn from "../hooks/useFadeIn";

export default function Hero({ data }) {
  const ref = useFadeIn();
  return (
    <section id="hero" ref={ref} className="fade-section">
      <h1>{data.name}</h1>
      <h3 style={{ color: "var(--accent)", marginTop: "0.75rem" }}>
        {data.role}
      </h3>

      <p style={{ maxWidth: "650px", marginTop: "1.5rem" }}>
        {data.summary}
      </p>

      <a
        href="/Nishant_Resume.pdf"
        download
        className="resume-btn"
      >
        Download Resume
      </a>

    </section>
  );
}
