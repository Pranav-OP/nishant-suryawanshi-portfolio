import useFadeIn from "../hooks/useFadeIn";

export default function Languages({ languages }) {
  const ref = useFadeIn();

  return (
    <section id="languages" ref={ref} className="fade-section">
      <h2>Languages</h2>

      {languages.map((lang, i) => (
        <div key={i} className="card">
          {lang}
        </div>
      ))}
    </section>
  );
}
