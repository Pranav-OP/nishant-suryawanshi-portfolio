export default function Hero({ data }) {
  return (
    <section>
      <h1>{data.name}</h1>
      <h3 style={{ color: "var(--accent)", marginTop: "0.75rem" }}>
        {data.role}
      </h3>

      <p style={{ maxWidth: "650px", marginTop: "1.5rem" }}>
        {data.summary}
      </p>
    </section>
  );
}
