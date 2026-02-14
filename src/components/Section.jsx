import useFadeIn from "../hooks/useFadeIn";
export default function Section({ title, items, list }) {
  const ref = useFadeIn();
  return (
    <section ref={ref} className="fade-section">
      <h2>{title}</h2>
      {items &&
        items.map((item, i) => (
          <div key={i} className="card">
            <strong>{item.degree}</strong>
            <p>{item.institution}</p>
            <small>{item.duration} | {item.location}</small>
          </div>
        ))}
      {list &&
        list.map((l, i) => (
          <div key={i} className="card">{l}</div>
        ))}
    </section>
  );
}
